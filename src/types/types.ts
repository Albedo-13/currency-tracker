export type CurrencyType = {
  code: string;
  name: string;
  thumb: string;
  decimal_digits: number;
};

export type ExchangeRateType = {
  code: string;
  value: number;
};

export type ExchangeRatesDataType = {
  [key: string]: ExchangeRateType;
};

export type BankType = {
  name: string;
  address: string;
  currencies: CurrencyType[];
  coordinates: number[];
};

export type XOHLCType = {
  x?: number;
  o?: number;
  h?: number;
  l?: number;
  c?: number;
};