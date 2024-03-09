export function formatCurrency(value: number, currencyCode: string): string {
  const options = {
    style: "currency",
    currency: currencyCode,
    // minimumFractionDigits: decimalDigits,
    // maximumFractionDigits: decimalDigits,
  };
  const notSupportedCurrencyCodes = ["BTC"];

  return notSupportedCurrencyCodes.includes(currencyCode)
    ? value.toLocaleString(undefined, options)
    : value.toLocaleString("en-US", options);
}
