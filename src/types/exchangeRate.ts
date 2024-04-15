export type ExchangeRateType = {
  code: string;
  value: number;
};

export type ExchangeRatesDataType = {
  [key: string]: ExchangeRateType;
};
