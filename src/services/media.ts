import { GetMediaContentInput } from '@/types/input/get-media-content.js';
import { MethodOptions } from '@/types/method-options.js';
import { ServiceType } from '@/types/service-type.js';
import { BaseService } from '@/services/base.js';

export class MediaService extends BaseService {
  readonly serviceName = 'MediaService';
  readonly type = ServiceType.MED;
  protected readonly wsVersion = '1.0.0';

  protected nsVersion(): string {
    return '1.0.0';
  }

  async getMediaContent(options: MethodOptions<GetMediaContentInput>) {
    const response = await this.request({
      action: 'MediaContent',
      ...options
    });
    return response.MediaContentArray.MediaContent;
  }
}