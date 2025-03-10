import { RequestOptions } from '@/types/request-options.js';
import { XMLBuilder, XMLParser } from 'fast-xml-parser';
import { CompanyCode } from '@/types/company-code.js';
import { Endpoint } from '@/types/object/endpoint.js';
import { ServiceType } from '@/types/service-type.js';
import { Environment } from '@/types/environment.js';

export abstract class BaseService {
  constructor(private readonly env: Environment = Environment.live) {
  }

  private static readonly endpointCache = new Map<string, Endpoint>();
  private readonly xmlParser = new XMLParser({
    trimValues: true,
    removeNSPrefix: true,
    isArray(_, jPath) {
      const lastIndexOfDot = jPath.lastIndexOf('.');

      if (lastIndexOfDot === -1) {
        return false;
      }

      return jPath.slice(0, lastIndexOfDot).endsWith('Array');
    }
  });
  private readonly xmlBuilder = new XMLBuilder();

  protected abstract readonly wsVersion: string;
  abstract readonly serviceName: string;
  abstract readonly type: ServiceType;

  protected abstract nsVersion(apiVersion: string): string;

  static async getEndpoint<
    E extends Environment | undefined = undefined,
    R = E extends Environment ? string : Endpoint,
  >(
    company: CompanyCode,
    service: ServiceType,
    version: string,
    env?: E
  ): Promise<R> {
    const cacheKey = `${company}-${service}-${version}`;

    if (!this.endpointCache.has(cacheKey)) {
      const res = await fetch(`https://services.promostandards.org/WebServiceRepository/WebServiceRepository.svc/json/companies/${company}/endpoints/types/${service}?version=${version}`);

      if (!res.ok) {
        throw new Error(`Failed to fetch endpoint for ${company}, ${service}, ${version}`);
      }

      const data = await res.json();

      if (data.length === 0) {
        throw new Error(`No endpoints found for ${company}, ${service}, ${version}`);
      }

      this.endpointCache.set(cacheKey, {
        test: data[0].TestURL,
        live: data[0].URL
      });
    }

    const endpoint = this.endpointCache.get(cacheKey)!;

    if (!env) {
      return endpoint as R;
    }

    return endpoint[Environment[env]] as R;
  }

  protected buildEnvelope(options: RequestOptions) {
    const nsVersion = this.nsVersion(options.apiVersion);
    const params = options.input ? this.xmlBuilder.build(options.input) : '';

    return `
      <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns="http://www.promostandards.org/WSDL/${this.serviceName}/${nsVersion}/SharedObjects/">
        <soap:Header/>
        <soap:Body>
          <Get${options.action}Request xmlns="http://www.promostandards.org/WSDL/${this.serviceName}/${nsVersion}/">
            <wsVersion>${this.wsVersion}</wsVersion>

            <id>${options.userId}</id>
            <password>${options.password}</password>

            ${params}
          </Get${options.action}Request>
        </soap:Body>
      </soap:Envelope>
    `;
  }

  async request(options: RequestOptions) {
    const endpoint = await BaseService.getEndpoint(options.company, this.type, options.apiVersion, this.env);
    const envelope = this.buildEnvelope(options);

    const response = await fetch(endpoint, {
      method: 'POST',
      body: envelope,
      headers: {
        'Content-Type': 'application/xml'
      }
    });

    const text = await response.text();
    const parsed = this.xmlParser.parse(text);
    const body = parsed.Envelope.Body;

    if (body.Fault) {
      throw new Error(JSON.stringify(body.Fault, null, 2));
    }

    const root = body[`Get${options.action}Response`];

    if (root.ServiceMessageArray?.ServiceMessage) {
      throw new Error(JSON.stringify(root.ServiceMessageArray.ServiceMessage, null, 2));
    }

    return root;
  }
}