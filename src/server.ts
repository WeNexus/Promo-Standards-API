import { ProductPricingAndConfigurationService } from '@/services/product-pricing-and-configuration.js';
import { ServiceRouteMapping } from '@/types/service-route-mapping.js';
import { InventoryService } from '@/services/inventory.js';
import { ProductService } from '@/services/product.js';
import { CompanyCode } from '@/types/company-code.js';
import { MediaService } from '@/services/media.js';
import express, { RequestHandler } from 'express';
import * as process from 'node:process';
import dotEnv from 'dotenv';

dotEnv.config();

const app = express();
const port = Number(process.env.PORT) || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const pricingAndConfigurationService = new ProductPricingAndConfigurationService();
const inventoryService = new InventoryService();
const productService = new ProductService();
const mediaService = new MediaService();

const mappings = [
  {
    service: productService,
    prefix: '/products',
    endpoints: [
      {
        method: 'GET',
        paths: {
          '/sellable': 'getProductSellable',
          '/details': 'getProduct',
          '/modified': 'getProductDateModified',
          '/closeout': 'getProductCloseOut'
        }
      }
    ]
  } as ServiceRouteMapping<ProductService>,
  {
    service: mediaService,
    prefix: '/media',
    endpoints: [
      {
        method: 'GET',
        paths: {
          '/content': 'getMediaContent'
        }
      }
    ]
  } as ServiceRouteMapping<MediaService>,
  {
    service: inventoryService,
    prefix: '/inventory',
    endpoints: [
      {
        method: 'GET',
        paths: {
          '/levels': 'getInventoryLevels',
          '/filter-values': 'getFilterValues'
        }
      }
    ]
  } as ServiceRouteMapping<InventoryService>,
  {
    service: pricingAndConfigurationService,
    prefix: '/pricing-and-configuration',
    endpoints: [
      {
        method: 'GET',
        paths: {
          '/available-locations': 'getAvailableLocations',
          '/configuration-and-pricing': 'getConfigurationAndPricing',
          '/available-charges': 'getAvailableCharges',
          '/fob-points': 'getFobPoints',
          '/decoration-colors': 'getDecorationColors'
        }
      }
    ]
  } as ServiceRouteMapping<ProductPricingAndConfigurationService>
];

app.use((req, res, next): any => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).json({
      code: 'Unauthorized',
      message: 'Authorization header is missing'
    });
  }

  const [type, token] = authorization.split(' ');

  if (type !== 'Basic') {
    return res.status(401).json({
      code: 'Unauthorized',
      message: 'Authorization type is not supported'
    });
  }

  const [id, password] = Buffer.from(token, 'base64').toString().split(':');
  req.auth = { id, password };

  next();
});

for (const mapping of mappings) {
  for (const endpoint of mapping.endpoints) {
    for (const path in endpoint.paths) {
      if (!endpoint.paths.hasOwnProperty(path)) {
        continue;
      }

      const route = `/:supplier/:version${mapping.prefix}${path}`;
      const handler: RequestHandler = async (req, res) => {
        try {
          const result = await (mapping.service as any)[endpoint.paths[path]]({
            company: req.params.supplier as CompanyCode,
            apiVersion: req.params.version as string,
            password: req.auth!.password,
            userId: req.auth!.id,
            input: req.query
          });

          res.json(result);
        } catch (e: any) {
          res.status(400).json({
            code: 'BadRequest',
            message: e.message
          });
        }
      };

      switch (endpoint.method) {
        case 'GET':
          app.get(route, handler);
          break;
        case 'POST':
          app.post(route, handler);
          break;
        case 'PUT':
          app.patch(route, handler);
          app.put(route, handler);
          break;
        case 'DELETE':
          app.delete(route, handler);
      }
    }
  }
}
