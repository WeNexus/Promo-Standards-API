export interface GetMediaContentInput {
  productId: string;
  partId?: string;
  cultureName?: string;
  mediaType: MediaType,
  classType?: MediaClassification | number;
}

export enum MediaType {
  Image = 'Image',
  Video = 'Video',
  Audio = 'Audio',
  Document = 'Document'
}

export enum MediaClassification {
  Unspecified = 1000,
  Blank = 1001,
  Decorated = 1002,
  Alternate = 1003,
  Swatch = 1004,
  Custom = 1005,
  Primary = 1006,
  Front = 1007,
  Rear = 1008,
  Right = 1009,
  Left = 1010,
  Top = 1011,
  Bottom = 1012,
  Inside = 1013,
  Outside = 1014,
  Standard = 2000,
  High = 2001,
  Podcast = 3000,
  Specs = 4000,
  ProductSafety = 4001,
  Facts = 4002,
  Compliance = 4003,
  ArtTemplate = 4004,
  Marketing = 4005
}