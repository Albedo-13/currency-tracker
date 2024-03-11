export const currenciesCodes = ["USD", "ARS", "CAD", "JPY", "AUD", "CNY", "EUR", "BTC", "GBP"].join(",");

export const currenciesStaticInfo = {
  "USD": { code: "USD", name: "US Dollar", decimal_digits: 2, thumb: "/currency-icons/Dollar Icon.svg" },
  "ARS": { code: "ARS", name: "Argentine Peso", decimal_digits: 2, thumb: "/currency-icons/Peso Argentino Icon.svg" },
  "CAD": { code: "CAD", name: "Canadian Dollar", decimal_digits: 2, thumb: "/currency-icons/Canadian Dollar Icon.svg" },
  "JPY": { code: "JPY", name: "Japanese Yen", decimal_digits: 0, thumb: "/currency-icons/Yen Icon.svg" },
  "AUD": { code: "AUD", name: "Australian Dollar", decimal_digits: 2, thumb: "/currency-icons/Australian Dollar Icon.svg" },
  "CNY": { code: "CNY", name: "Chinese Yuan", decimal_digits: 2, thumb: "/currency-icons/Yen Icon.svg" },
  "EUR": { code: "EUR", name: "Euro", decimal_digits: 2, thumb: "/currency-icons/Euro Icon.svg" },
  "BTC": { code: "BTC", name: "Bitcoin", decimal_digits: 8, thumb: "/currency-icons/Bitcoin Icon.svg" },
  "GBP": { code: "GBP", name: "British Pound Sterling", decimal_digits: 2, thumb: "/currency-icons/Pound Icon.svg" },
};

export const staleTime = 1000 * 60 * 2;

export const modalRoot = document.getElementById('modal-root');

export const maxInputLength = 16;
