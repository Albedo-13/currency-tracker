import axios from "axios";

import { currenciesCodes } from "../constants/constants";

export async function getCurrencyData() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return axios({
    method: "get",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BASE_URL}/currencies`,
    params: {
      apikey: import.meta.env.VITE_CURRENCIES_API_KEY,
      currencies: currenciesCodes,
    },
  }).then((res) => {
    return res;
  });
}

export async function getExchangeRate() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return axios({
    method: "get",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BASE_URL}/latest`,
    params: {
      apikey: import.meta.env.VITE_CURRENCIES_API_KEY,
      currencies: currenciesCodes,
    },
  }).then((res) => {
    return res;
  });
}
