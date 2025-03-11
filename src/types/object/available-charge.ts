export interface AvailableCharge {
  chargeId: number | string;
  chargeName: string;
  chargeType: 'SETUP' | 'RUN' | 'ORDER';
  chargeDescription: string;
}