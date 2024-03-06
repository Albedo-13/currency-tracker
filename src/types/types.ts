export type TCurrency = {
  code: string;
  countries: string[];
  decimal_digits: number;
  name: string;
  name_plural: string;
  rounding: number;
  symbol: string;
  symbol_native: string;
  type: string;
};

export type TExchangeRate = {
  code: string;
  value: number;
};
