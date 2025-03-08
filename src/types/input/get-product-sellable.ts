import { LocaleInput } from './locale.js';

export interface GetProductSellableInput extends LocaleInput {
  productId?: string;
  partId?: string;
  lineName?: string;
  colorName?: string;
}