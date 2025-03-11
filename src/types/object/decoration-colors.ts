export interface DecorationColors {
  productId: string | number;
  locationId: string | number;
  pmsMatch: boolean;
  fullColor: boolean;
  ColorArray: ColorArray;
  DecorationMethodArray: DecorationMethodArray;
}

export interface ColorArray {
  Color: Color[];
}

export interface DecorationMethodArray {
  DecorationMethod: DecorationMethod[];
}

export interface Color {
  colorId: string | number;
  colorName: string;
}

export interface DecorationMethod {
  decorationId: string | number;
  decorationName: string;
}