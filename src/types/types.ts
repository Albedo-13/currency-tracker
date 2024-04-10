export type TCurrency = {
  code: string;
  name: string;
  thumb: string;
  decimal_digits: number;
};

export type TExchangeRate = {
  code: string;
  value: number;
};

export type TExchangeRatesData = {
  [key: string]: TExchangeRate;
};

export type TBank = {
  name: string;
  address: string;
  currencies: TCurrency[];
  coordinates: number[];
};

export type TXOHLC = {
  x?: number;
  o?: number;
  h?: number;
  l?: number;
  c?: number;
};