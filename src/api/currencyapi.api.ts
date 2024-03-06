// https://api.currencyapi.com/v3/latest?apikey=cur_live_McVPn095O6nn3dK3OZmnrHf7puqxlPHC7YdDhrBY
// cur_live_McVPn095O6nn3dK3OZmnrHf7puqxlPHC7YdDhrBY

import axios from "axios";
import { currenciesCodes } from "../constants/constants";

export const apiKey = "cur_live_McVPn095O6nn3dK3OZmnrHf7puqxlPHC7YdDhrBY";

export function getCurrencyData() {
  return axios({
    method: "get",
    maxBodyLength: Infinity,
    url: `https://api.currencyapi.com/v3/currencies?apikey=${apiKey}&currencies=${currenciesCodes}`,
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
