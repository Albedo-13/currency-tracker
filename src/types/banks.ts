import { CurrencyType } from "./currencies";

export type BankType = {
  name: string;
  address: string;
  currencies: CurrencyType[];
  coordinates: number[];
};

