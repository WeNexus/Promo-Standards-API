import { GetConfigurationAndPricingInput } from '@/types/input/get-configuration-and-pricing.js';
import { GetAvailableLocationsInput } from '@/types/input/get-available-locations.js';
import { ConfigurationAndPricing } from '@/types/object/configuration-and-pricing.js';
import { GetDecorationColorsInput } from '@/types/input/get-decoration-colors.js';
import { AvailableLocation } from '@/types/object/available-location.js';
import { DecorationColors } from '@/types/object/decoration-colors.js';
import { AvailableCharge } from '@/types/object/available-charge.js';
import { MethodOptions } from '@/types/method-options.js';
import { FobPoint } from '@/types/object/fob-point.js';
import { ServiceType } from '@/types/service-type.js';
import { BaseService } from '@/services/base.js';

export class ProductPricingAndConfigurationService extends BaseService {
  readonly serviceName = 'PricingAndConfiguration';
  readonly type = ServiceType.PPC;
  protected readonly wsVersion = '1.0.0';

  protected nsVersion(): string {
    return '1.0.0';
  }

  async getAvailableLocations(options: MethodOptions<GetAvailableLocationsInput>): Promise<AvailableLocation[]> {
    const response = await this.request({
      action: 'AvailableLocations',
      ...options
    });
    return response.AvailableLocationArray.AvailableLocation;
  }

  async getConfigurationAndPricing(options: MethodOptions<GetConfigurationAndPricingInput>): Promise<ConfigurationAndPricing> {
    const response = await this.request({
      action: 'ConfigurationAndPricing',
      ...options
    });
    return response.Configuration;
  }

  async getAvailableCharges(options: MethodOptions<GetAvailableLocationsInput>): Promise<AvailableCharge[]> {
    const response = await this.request({
      action: 'AvailableCharges',
      ...options
    });
    return response.AvailableChargeArray.AvailableCharge;
  }

  async getFobPoints(options: MethodOptions<GetAvailableLocationsInput>): Promise<FobPoint[]> {
    const response = await this.request({
      action: 'FobPoints',
      ...options
    });
    return response.FobPointArray.FobPoint;
  }

  async getDecorationColors(options: MethodOptions<GetDecorationColorsInput>): Promise<DecorationColors> {
    const response = await this.request({
      action: 'DecorationColors',
      ...options
    });

    return response.DecorationColors;
  }
}