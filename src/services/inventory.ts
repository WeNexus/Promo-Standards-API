import { GetInventoryLevelsInput } from '@/types/input/get-inventory-levels.js';
import { GetFilterValuesInput } from '@/types/input/get-filter-values.js';
import { InventoryLevel } from '@/types/object/inventory-level.js';
import { FilterValues } from '@/types/object/filter-values.js';
import { MethodOptions } from '@/types/method-options.js';
import { ServiceType } from '@/types/service-type.js';
import { BaseService } from '@/services/base.js';

export class InventoryService extends BaseService {
  readonly serviceName = 'Inventory';
  readonly type = ServiceType.INV;
  readonly wsVersion = '2.0.0';

  async getFilterValues(options: MethodOptions<GetFilterValuesInput>): Promise<FilterValues> {
    const response = await this.request({
      action: 'FilterValues',
      ...options,
    });

    return response.FilterValues;
  }

  async getInventoryLevels(options: MethodOptions<GetInventoryLevelsInput>): Promise<InventoryLevel> {
    const response = await this.request({
      action: 'InventoryLevels',
      ...options,
    });

    return response.Inventory;
  }

  protected nsVersion(apiVersion: string): string {
    return apiVersion;
  }
}

