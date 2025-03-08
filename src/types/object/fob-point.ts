import { CurrencyCode } from '@/types/input/get-configuration-and-pricing.js';
import { CountryCode } from '@/types/input/locale.js';

export interface FobPoint {
  fobId: string;
  fobPostalCode: string;
  fobCity: string;
  fobState: string;
  fobCountry: CountryCode;
  CurrencySupportedArray: CurrencySupportedArray;
  ProductArray: ProductArray;
}

export interface ProductArray {
  Product: Product[];
}

export interface Product {
  productId: string;
}

export interface CurrencySupportedArray {
  CurrencySupported: CurrencySupported[];
}

export interface CurrencySupported {
  currency: CurrencyCode;
}