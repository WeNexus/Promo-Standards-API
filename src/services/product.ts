import { GetProductDateModifiedInput } from '@/types/input/get-product-date-modified.js';
import { GetProductSellableInput } from '@/types/input/get-product-sellable.js';
import { ProductCloseOut } from '@/types/object/product-close-out.js';
import { ProductSellable } from '@/types/object/product-sellable.js';
import { ProductChange } from '@/types/object/product-change.js';
import { GetProductInput } from '@/types/input/get-product.js';
import { MethodOptions } from '@/types/method-options.js';
import { ServiceType } from '@/types/service-type.js';
import { Product } from '@/types/object/product.js';
import { BaseService } from '@/services/base.js';

export class ProductService extends BaseService {
  readonly serviceName = 'ProductDataService';
  readonly type = ServiceType.Product;
  readonly wsVersion = '2.0.0';

  protected nsVersion(apiVersion: string): string {
    return apiVersion;
  }

  async getProductSellable(options: MethodOptions<GetProductSellableInput | undefined>): Promise<ProductSellable[]> {
    const response = await this.request({
      action: 'ProductSellable',
      ...options,
      input: {
        isSellable: true,
        ...(options.input ?? {})
      }
    });
    return response.ProductSellableArray.ProductSellable;
  }

  async getProduct(options: MethodOptions<GetProductInput>): Promise<Product> {
    const response = await this.request({
      action: 'Product',
      ...options,
      input: {
        ...options.input,
        ApparelSizeArray: options.input.ApparelSizeArray?.map(a => ({
          ApparelSize: a
        }))
      }
    });

    return response.Product;
  }

  async getProductDateModified(options: MethodOptions<GetProductDateModifiedInput>): Promise<ProductChange[]> {
    const response = await this.request({
      action: 'ProductDateModified',
      ...options
    });
    return response.ProductDateModifiedArray.ProductDateModified;
  }

  async getProductCloseOut(options: MethodOptions): Promise<ProductCloseOut[]> {
    const response = await this.request({
      action: 'ProductCloseOut',
      ...options
    });
    return response.ProductCloseOutArray.ProductCloseOut;
  }
}

