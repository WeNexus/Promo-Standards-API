import { GetAvailableLocationsInput } from '@/types/input/get-available-locations.js';

export interface GetDecorationColorsInput extends GetAvailableLocationsInput {
  locationId: string;
  decorationId?: string;
}