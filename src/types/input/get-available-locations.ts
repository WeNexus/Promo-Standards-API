import { LocaleInput } from '@/types/input/locale.js';

export interface GetAvailableLocationsInput extends LocaleInput {
  productId: string;
}