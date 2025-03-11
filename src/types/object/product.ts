export interface Product {
  productId: string | number;
  productName: string;
  description: string;
  priceExpiresDate?: string;
  productBrand?: string;
  export: boolean | null | '';
  lastChangeDate: string;
  primaryImageUrl?: string;
  complianceInfoAvailable?: string | null;
  creationDate: string;
  endDate?: string;
  effectiveDate?: string;
  isCaution: boolean | null | '';
  isCloseout: boolean | null | '';
  cautionComment?: string;
  lineName?: string;
  imprintSize: string;
  unspscCommodityCode?: number;
  defaultSetUpCharge?: string;
  defaultRunCharge?: string;

  ProductMarketingPointArray: ProductMarketingPointArray;
  ProductKeywordArray?: ProductKeywordArray;
  ProductCategoryArray?: ProductCategoryArray;
  RelatedProductArray?: RelatedProductArray;
  ProductPriceGroupArray?: ProductPriceGroupArray;
  LocationDecorationArray: LocationDecorationArray;
  ProductPartArray: ProductPartArray;
  FobPointArray: FobPointArray;
}

export interface ProductMarketingPointArray {
  ProductMarketingPoint: ProductMarketingPoint[];
}

export interface ProductCategoryArray {
  ProductCategory: ProductCategory[];
}

export interface ProductKeywordArray {
  ProductCategory: ProductKeyword[];
}

export interface RelatedProductArray {
  RelatedProduct: RelatedProduct[];
}

export interface ProductPriceGroupArray {
  ProductPriceGroup: ProductPriceGroup[];
}

export interface ProductPriceArray {
  ProductPrice: ProductPrice[];
}

export interface LocationDecorationArray {
  LocationDecoration: LocationDecoration[];
}

export interface ProductPartArray {
  ProductPart: ProductPart[];
}

export interface ShippingPackageArray {
  ShippingPackage: ShippingPackage[];
}

export interface FobPointArray {
  FobPoint: FobPoint[];
}

export interface ColorArray {
  Color: Color[];
}

export interface ProductPackagingArray {
  ProductPackaging: ProductPackaging[];
}

export interface SpecificationArray {
  Specification: Specification[];
}

export interface ProductKeyword {
  keyword: string;
}

export interface ProductMarketingPoint {
  pointType?: string;
  pointCopy: string;
}

export interface ProductCategory {
  category: string;
  subCategory?: string;
}

export interface RelatedProduct {
  relationType: 'Substitute' | 'Companion Sell' | 'Common Grouping';
  productId: number | string;
  partId?: string | number;
}

export interface ProductPrice {
  quantityMin: number;
  price: number;
  discountCode: string;
}

export interface ProductPriceGroup {
  ProductPriceArray: ProductPriceArray;
  groupName: string;
  currency: string;
}

export interface LocationDecoration {
  locationName: string;
  maxImprintColors?: string;
  decorationName: string;
  locationDecorationComboDefault: boolean;
  priceIncludes: boolean;
}

export interface ProductPart {
  partId: string | number;
  description?: string[];
  countryOfOrigin?: string;
  primaryMaterial?: string;
  shape?: string;
  leadTime?: number;
  isRushService: boolean | null | '';
  unspsc?: string;
  gtin?: string;
  endDate?: string;
  effectiveDate?: string;
  isCloseout: boolean | null | '';
  isCaution: boolean | null | '';
  cautionComment?: string;
  nmfcCode?: number;
  nmfcNumber?: string;
  isOnDemand: boolean | null | '';
  isHazmat: boolean | null | '';

  ColorArray?: ColorArray;
  ShippingPackageArray?: ShippingPackageArray;
  ProductPackagingArray?: ProductPackagingArray;
  primaryColor?: Color;
  ApparelSize: ApparelSize;
  Dimension?: Dimension;
  SpecificationArray?: SpecificationArray;
}

export interface Dimension {
  dimensionUom: DimensionUom;
  weightUom: WeightUom;
  depth?: number;
  height?: number;
  width?: number;
  weight?: number;
}

export interface ApparelSize {
  apparelStyle: ApparelStyle;
  labelSize: LabelSize;
  customSize?: string;
}

export interface Specification {
  specificationType: SpecificationType;
  specificationUom: string;
  measurementValue: string;
}

export interface ProductPackaging {
  default: boolean;
  packageType: string;
  description?: string;
  quantity: number;
  dimensionUom: DimensionUom;
  depth?: number;
  height?: number;
  width?: number;
  weightUom: WeightUom;
  weight: number;
}

export interface Color {
  colorName: string;
  hex?: string;
  approximatePms?: string;
  standardColorName?: string;
}

export interface ShippingPackage {
  packageType: string;
  description: string;
  quantity: number;
  dimensionUom: DimensionUom;
  depth: number;
  height: number;
  width: number;
  weightUom: WeightUom;
  weight: number;
}

export interface FobPoint {
  fobId: string | number;
  fobCity: string;
  fobState: string;
  fobPostalCode: string;
  fobCountry: string;
}

export type SpecificationType =
  'Length'
  | 'Thickness'
  | 'Radius'
  | 'Volume'
  | 'Capacity'
  | 'Memory'
  | 'Data Ports'
  | 'Capacitance'
  | 'Voltage'
  | 'Point Size'
  | 'Sheet Size'
  | 'Sheet Count'
  | 'Pockets'
  | 'Inseam'
  | 'Bust'
  | 'Chest'
  | 'Waist'
  | 'Hips'
  | 'Cup'
  | 'Rise'
  | 'Neck'
  | 'Thigh'
  | 'Shoulders'
  | 'Sleeve'
  | 'Device Size';

export type ApparelStyle = 'Unisex' | 'Youth' | 'Girls' | 'Boys' | 'Womens' | 'WomensTall' | 'Mens' | 'MensTall';

export type DimensionUom = 'MM' | 'CM' | 'MR' | 'IN' | 'FT' | 'YD';

export type WeightUom = 'ME' | 'KG' | 'OZ' | 'LB';

export type LabelSize =
  'OSFA'
  | '4XS'
  | '3XS'
  | '2XS'
  | 'XS'
  | 'S'
  | 'M'
  | 'L'
  | 'XL'
  | '2XL'
  | '3XL'
  | '4XL'
  | '5XL'
  | 'CUSTOM';