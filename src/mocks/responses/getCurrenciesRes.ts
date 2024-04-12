import { HttpResponse, http } from "msw";
import { currenciesCodes } from "@constants/constants";

export default http.get(`${import.meta.env.VITE_BASE_URL}/currencies?apikey=&${import.meta.env.VITE_API_KEY}currencies=${currenciesCodes}`, (req) => {
  console.log('Captured a "currencies" request', req.request.url);
  return HttpResponse.json({
    "data": {
      "ARS": {
        "symbol": "AR$",
        "name": "Argentine Peso",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "ARS",
        "name_plural": "Argentine pesos",
        "type": "fiat",
        "countries": [
          "AR"
        ]
      },
      "AUD": {
        "symbol": "AU$",
        "name": "Australian Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "AUD",
        "name_plural": "Australian dollars",
        "type": "fiat",
        "countries": [
          "AU",
          "CC",
          "CX",
          "HM",
          "KI",
          "NF",
          "NR",
          "TV"
        ]
      },
      "CAD": {
        "symbol": "CA$",
        "name": "Canadian Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "CAD",
        "name_plural": "Canadian dollars",
        "type": "fiat",
        "countries": [
          "CA"
        ]
      },
      "CNY": {
        "symbol": "CN¥",
        "name": "Chinese Yuan",
        "symbol_native": "CN¥",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "CNY",
        "name_plural": "Chinese yuan",
        "type": "fiat",
        "countries": [
          "CN"
        ]
      },
      "EUR": {
        "symbol": "€",
        "name": "Euro",
        "symbol_native": "€",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "EUR",
        "name_plural": "Euros",
        "type": "fiat",
        "countries": [
          "AD",
          "AT",
          "AX",
          "BE",
          "BL",
          "CP",
          "CY",
          "DE",
          "EA",
          "EE",
          "ES",
          "EU",
          "FI",
          "FR",
          "FX",
          "GF",
          "GP",
          "GR",
          "IC",
          "IE",
          "IT",
          "LT",
          "LU",
          "LV",
          "MC",
          "ME",
          "MF",
          "MQ",
          "MT",
          "NL",
          "PM",
          "PT",
          "RE",
          "SI",
          "SK",
          "SM",
          "TF",
          "VA",
          "XK",
          "YT",
          "ZW"
        ]
      },
      "GBP": {
        "symbol": "£",
        "name": "British Pound Sterling",
        "symbol_native": "£",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "GBP",
        "name_plural": "British pounds sterling",
        "type": "fiat",
        "countries": [
          "GB",
          "GG",
          "GS",
          "IM",
          "JE",
          "TA",
          "UK",
          "ZW"
        ]
      },
      "JPY": {
        "symbol": "¥",
        "name": "Japanese Yen",
        "symbol_native": "￥",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "JPY",
        "name_plural": "Japanese yen",
        "type": "fiat",
        "countries": [
          "JP"
        ]
      },
      "USD": {
        "symbol": "$",
        "name": "US Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "USD",
        "name_plural": "US dollars",
        "type": "fiat",
        "countries": [
          "AC",
          "AS",
          "BQ",
          "DG",
          "EC",
          "FM",
          "GU",
          "HT",
          "IO",
          "MH",
          "MP",
          "PA",
          "PR",
          "PW",
          "SV",
          "TC",
          "TL",
          "UM",
          "US",
          "VG",
          "VI",
          "ZW"
        ]
      },
      "BTC": {
        "symbol": "₿",
        "name": "Bitcoin",
        "symbol_native": "₿",
        "decimal_digits": 8,
        "rounding": 0,
        "code": "BTC",
        "name_plural": "Bitcoins",
        "type": "crypto",
        "countries": []
      }
    }
  });
});