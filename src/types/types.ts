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
  location: string;
  address: string;
  description: string;
  currencies: TCurrency[];
  coordinates: number[];
  type: string;
};
