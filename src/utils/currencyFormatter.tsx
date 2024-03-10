import { currenciesStaticInfo } from "../constants/constants";

export function formatCurrency(value: number, currencyCode: string, decimalDigits: number): string {
  const options = {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: decimalDigits,
    maximumFractionDigits: decimalDigits,
  };
  const notSupportedCurrencyCodes = ["BTC"];

  return notSupportedCurrencyCodes.includes(currencyCode)
    ? value.toLocaleString(undefined, options)
    : value.toLocaleString("en-US", options);
}

export function convertCurrency(value: number, fromCurrencyCode: string, toCurrencyCode: string): number {

}