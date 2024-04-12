import { useQuery } from "@tanstack/react-query";

import { getExchangeRate } from "@/api/currencyapi.api";

export function useExchangeRates() {
  const queryKeys = ["exchangeRates"];
  const exchangeRates = useQuery({ queryKey: queryKeys, queryFn: getExchangeRate });

  return exchangeRates;
}
