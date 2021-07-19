export interface Rate {
  price: number;
  id: string;
  rateTypeId: RateTypeId;
}

export interface RateTypeId {
  unit: string;
  name: string;
  id: string;
}
