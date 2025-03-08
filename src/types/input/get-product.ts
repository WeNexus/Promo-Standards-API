import { LocaleInput } from './locale.js';

export interface GetProductInput extends LocaleInput {
  productId: string;
  partId?: string;
  colorName?: string;
  ApparelSizeArray?: ApparelSize[];
}

export interface ApparelSize {
  style?: string;
  labelSize?: string;
  customSize?: string;
}