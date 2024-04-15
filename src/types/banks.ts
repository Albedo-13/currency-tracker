import { CurrencyType } from "./currencyType";

export type BankType = {
  name: string;
  address: string;
  currencies: CurrencyType[];
  coordinates: number[];
};

