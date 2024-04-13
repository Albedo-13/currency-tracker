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
