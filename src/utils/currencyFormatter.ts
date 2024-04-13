import type { BankType, ExchangeRatesDataType } from "@types";

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

export function convertCurrency(value: number, fromCurrencyCode: string, toCurrencyCode: string, exchangeRates: ExchangeRatesDataType): string {
  return (value / exchangeRates[fromCurrencyCode].value * exchangeRates[toCurrencyCode].value).toFixed(4);
}

export function findBanksByCurrencyCodeOrName(searchString = "", banks: BankType[]): BankType[] {
  return banks.filter((bank) => {
    return bank.currencies.some((currency) => {
      return (
        currency.name.toLowerCase().includes(searchString.trim().toLowerCase()) ||
        currency.code.toLowerCase().includes(searchString.trim().toLowerCase())
      );
    });
  });
}