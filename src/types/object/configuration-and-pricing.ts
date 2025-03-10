export interface ConfigurationAndPricing {
  productId: number | string;
  currency: string;
  priceType: string;
  fobPostalCode?: string;
  PartArray: PartArray;
  LocationArray?: LocationArray;
  FobArray: FobArray;
}

export interface PartArray {
  Part: Part[];
}

export interface Part {
  partId: string;
  partDescription?: string;
  partGroup: number;
  nextPartGroup?: number;
  partGroupRequired: boolean;
  partGroupDescription: string;
  ratio: number;
  defaultPart?: string;
  PartPriceArray?: PartPriceArray;
  LocationIdArray?: LocationIdArray;
}

export interface PartPriceArray {
  PartPrice: PartPrice[];
}

export interface PartPrice {
  minQuantity: number;
  price: number;
  discountCode?: string;
  priceUom: PriceUom;
  priceEffectiveDate: string;
  priceExpiryDate: string;
}

export interface LocationIdArray {
  LocationId: LocationId[];
}

export interface LocationId {
  locationId: number;
}

export interface LocationArray {
  Location: Location[];
}

export interface Location {
  locationId: number;
  locationName: string;
  decorationsIncluded: number;
  defaultLocation: boolean;
  maxDecoration: number;
  minDecoration: number;
  locationRank?: number;
  DecorationArray: DecorationArray;
}

export interface DecorationArray {
  Decoration: Decoration[];
}

export interface Decoration {
  decorationId: number;
  decorationName?: string;
  decorationGeometry: 'Circle' | 'Rectangle' | 'Other';
  decorationHeight?: number;
  decorationWidth?: number;
  decorationDiameter?: number;
  decorationUom: string;
  allowSubForDefaultLocation: boolean;
  allowSubForDefaultMethod: boolean;
  itemPartQuantityLTM?: number;
  decorationUnitsIncluded?: number;
  decorationUnitsIncludedUom?: string;
  decorationUnitsMax?: number;
  defaultDecoration: boolean;
  leadTime?: number;
  rushLeadTime?: number;
  ChargeArray?: ChargeArray;
}

export interface ChargeArray {
  Charge: Charge[];
}

export interface Charge {
  chargeId: number;
  chargeName: string;
  chargeDescription: string;
  chargeType: string;
  ChargePriceArray: ChargePriceArray;
  chargesAppliesLTM: boolean;
  chargesPerLocation?: number;
  chargesPerColor?: number;
}

export interface ChargePriceArray {
  ChargePrice: ChargePrice[];
}

export interface ChargePrice {
  xMinQty: number;
  xUom: PriceUom;
  yMinQty: number;
  yUom: 'Colors' | 'Inches' | 'Other' | 'Stitches' | 'SquareInches';
  price: number;
  discountCode?: string;
  repeatPrice?: number;
  repeatDiscountCode?: string;
  priceEffectiveDate?: string;
  priceExpiryDate?: string;
}

export interface FobArray {
  Fob: Fob[];
}

export interface Fob {
  fobId: string | number;
  fobPostalCode?: string;
}

export type PriceUom = 'BX' | 'CA' | 'DZ' | 'EA' | 'KT' | 'PR' | 'PK' | 'RL' | 'ST' | 'SL' | 'TH';