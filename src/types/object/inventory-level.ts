import { PriceUom } from '@/types/object/configuration-and-pricing.js';

export interface InventoryLevel {
  productId: string | number;
  PartInventoryArray: { PartInventory: PartInventory[] };
}

export interface PartInventory {
  partId: string | number;
  mainPart: boolean;
  partColor?: string;
  labelSize?: string;
  partDescription?: string;
  quantityAvailable: Quantity;
  manufacturedItem: boolean;
  buyToOrder: boolean;
  replenishmentLeadTime?: number;
  attributeSelection?: string[];
  lastModified: string;
  InventoryLocationArray: { InventoryLocation: InventoryLocation[] };
}

export interface Quantity {
  uom: PriceUom;
  value: number;
}

export interface InventoryLocation {
  inventoryLocationId: string | number;
  inventoryLocationName?: string;
  postalCode: string;
  country: string;
  inventoryLocationQuantity: Quantity;
  FutureAvailabilityArray: { FutureAvailability: FutureAvailability[] };
}

export interface FutureAvailability {
  Quantity: Quantity;
  availableOn: string;
}