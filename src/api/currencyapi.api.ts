// https://api.currencyapi.com/v3/latest?apikey=cur_live_McVPn095O6nn3dK3OZmnrHf7puqxlPHC7YdDhrBY
// cur_live_McVPn095O6nn3dK3OZmnrHf7puqxlPHC7YdDhrBY

import axios from "axios";
import { currenciesCodes } from "../constants/constants";

export const baseUrl = "https://api.currencyapi.com/v3";
export const apiKey = "cur_live_McVPn095O6nn3dK3OZmnrHf7puqxlPHC7YdDhrBY";

export async function getCurrencyData() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return axios({
    method: "get",
    maxBodyLength: Infinity,
    url: `${baseUrl}/currencies`,
    params: {
      apikey: apiKey,
      currencies: currenciesCodes,
    },
  }).then((res) => {
    console.log("PING THE CURRENCIES");
    return res;
  });
}

export async function getExchangeRate() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return axios({
    method: "get",
    maxBodyLength: Infinity,
    url: `${baseUrl}/latest`,
    params: {
      apikey: apiKey,
      currencies: currenciesCodes,
    },
  }).then((res) => {
    console.log("PING THE LATEST");
    return res;
  });
}
