export interface DecorationColors {
  productId: string | number;
  locationId: string;
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
  colorId: string;
  colorName: string;
}

export interface DecorationMethod {
  decorationId: string;
  decorationName: string;
}