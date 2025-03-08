export interface AvailableCharge {
  chargeId: number;
  chargeName: string;
  chargeType: 'SETUP' | 'RUN' | 'ORDER';
  chargeDescription: string;
}