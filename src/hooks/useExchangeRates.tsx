import { getExchangeRate } from "@/api/currencyapi.api";
import { useQuery } from "@tanstack/react-query";

export function useExchangeRates() {
  const queryKeys = ["exchangeRates"];
  const exchangeRates = useQuery({ queryKey: queryKeys, queryFn: getExchangeRate });

  return exchangeRates;
}
