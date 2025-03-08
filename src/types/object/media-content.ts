import { MediaType } from '@/types/input/get-media-content.js';

export interface MediaContent {
  productId: string | number;
  partId?: string | number;
  url: string;
  description?: string;
  mediaType: MediaType;
  fileSize?: number;
  width?: number;
  height?: number;
  dpi?: number;
  color?: string;
  singlePart: boolean;
  changeTimeStamp?: string;

  DecorationArray?: DecorationArray;
  ClassTypeArray?: ClassTypeArray;
  LocationArray?: LocationArray;
}

export interface ClassType {
  classType: number
  className: string
}

export interface Decoration {
  decorationId: number
  decorationName: string
}

export interface Location {
  locationId: number
  locationName: string
}

export interface ClassTypeArray {
  ClassType: ClassType
}

export interface DecorationArray {
  Decoration: Decoration
}

export interface LocationArray {
  Location: Location
}
