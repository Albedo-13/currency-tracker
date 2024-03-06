// https://api.currencyapi.com/v3/latest?apikey=cur_live_McVPn095O6nn3dK3OZmnrHf7puqxlPHC7YdDhrBY
// cur_live_McVPn095O6nn3dK3OZmnrHf7puqxlPHC7YdDhrBY

import axios from "axios";
import { currenciesCodes } from "../constants/constants";

export const baseUrl = "https://api.currencyapi.com/v3/";
export const apiKey = "cur_live_McVPn095O6nn3dK3OZmnrHf7puqxlPHC7YdDhrBY";

export function getCurrencyData() {
  return axios({
    method: "get",
    maxBodyLength: Infinity,
    url: `${baseUrl}/currencies`,
    params: {
      apikey: apiKey,
      currencies: currenciesCodes,
    }
  })
}

export function getExchangeRate() {
  return axios({
    method: "get",
    maxBodyLength: Infinity,
    url: `${baseUrl}/latest`,
    params: {
      apikey: apiKey,
      currencies: currenciesCodes,
    }
  })
}