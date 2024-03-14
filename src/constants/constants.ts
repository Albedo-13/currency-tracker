export const currenciesCodes = ["USD", "ARS", "CAD", "JPY", "AUD", "CNY", "EUR", "BTC", "GBP"].join(",");

export const staleTime = 1000 * 60 * 2;

export const modalRoot = document.getElementById("modal-root");

export const maxInputLength = 16;

export const currenciesStaticInfo = {
  USD: { code: "USD", name: "US Dollar", decimal_digits: 2, thumb: "/currency-icons/Dollar Icon.svg" },
  ARS: { code: "ARS", name: "Argentine Peso", decimal_digits: 2, thumb: "/currency-icons/Peso Argentino Icon.svg" },
  CAD: { code: "CAD", name: "Canadian Dollar", decimal_digits: 2, thumb: "/currency-icons/Canadian Dollar Icon.svg" },
  JPY: { code: "JPY", name: "Japanese Yen", decimal_digits: 0, thumb: "/currency-icons/Yen Icon.svg" },
  AUD: {
    code: "AUD",
    name: "Australian Dollar",
    decimal_digits: 2,
    thumb: "/currency-icons/Australian Dollar Icon.svg",
  },
  CNY: { code: "CNY", name: "Chinese Yuan", decimal_digits: 2, thumb: "/currency-icons/Yen Icon.svg" },
  EUR: { code: "EUR", name: "Euro", decimal_digits: 2, thumb: "/currency-icons/Euro Icon.svg" },
  BTC: { code: "BTC", name: "Bitcoin", decimal_digits: 8, thumb: "/currency-icons/Bitcoin Icon.svg" },
  GBP: { code: "GBP", name: "British Pound Sterling", decimal_digits: 2, thumb: "/currency-icons/Pound Icon.svg" },
};

export const banksStaticInfo = [
  {
    name: "Priorbank",
    address: "Минск, ул. Притыцкого, 30A",
    currencies: [
      currenciesStaticInfo["USD"],
      currenciesStaticInfo["EUR"],
      currenciesStaticInfo["GBP"],
      currenciesStaticInfo["CNY"],
    ],
    coordinates: [27.494807300011413, 53.909842650893886],
  },
  {
    name: "Priorbank",
    address: "Минск, ул. Петра Мстиславца, 13",
    currencies: [
      currenciesStaticInfo["BTC"],
      currenciesStaticInfo["USD"],
      currenciesStaticInfo["EUR"],
      currenciesStaticInfo["JPY"],
      currenciesStaticInfo["CAD"],
    ],
    coordinates: [27.655131019348396, 53.93442513736616],
  },
  {
    name: "Альфабанк",
    address: "Минск, ул. Красная, 7",
    currencies: [
      currenciesStaticInfo["BTC"],
      currenciesStaticInfo["USD"],
      currenciesStaticInfo["CAD"],
      currenciesStaticInfo["AUD"],
      currenciesStaticInfo["JPY"],
    ],
    coordinates: [27.571489310374744, 53.912677659770864],
  },
  {
    name: "Альфабанк",
    address: "Минск, пр-т. Победителей, 108",
    currencies: [
      currenciesStaticInfo["GBP"],
      currenciesStaticInfo["CNY"],
      currenciesStaticInfo["ARS"],
      currenciesStaticInfo["AUD"],
      currenciesStaticInfo["JPY"],
    ],
    coordinates: [27.47785324614516, 53.93948179677532],
  },
  {
    name: "Беларусбанк",
    address: "Минск, ул. Одинцова, 9",
    currencies: [currenciesStaticInfo["USD"], currenciesStaticInfo["CNY"], currenciesStaticInfo["EUR"]],
    coordinates: [27.456308978889226, 53.89828348233047],
  },
  {
    name: "Беларусбанк",
    address: "Минск, ул. Кирова, 2-145",
    currencies: [currenciesStaticInfo["USD"], currenciesStaticInfo["CNY"], currenciesStaticInfo["EUR"]],
    coordinates: [27.55193614201586, 53.89184341652086],
  },
  {
    name: "Беларусбанк",
    address: "Минск, ул. Денисовская, 8",
    currencies: [
      currenciesStaticInfo["USD"],
      currenciesStaticInfo["CNY"],
      currenciesStaticInfo["EUR"],
      currenciesStaticInfo["AUD"],
    ],
    coordinates: [27.57293662221648, 53.87150410692575],
  },
];
