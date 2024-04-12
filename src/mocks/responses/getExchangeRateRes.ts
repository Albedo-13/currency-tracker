import { HttpResponse, http } from "msw";
import { currenciesCodes } from "@constants/constants";

export default http.get(`${import.meta.env.VITE_BASE_URL}/latest?apikey=&${import.meta.env.VITE_CURRENCIES_API_KEY}currencies=${currenciesCodes}`, (req) => {
  console.log('Captured a "latest" request', req.request.url);
  return HttpResponse.json({
    "meta": {
      "last_updated_at": "2024-03-05T23:59:59Z"
    },
    "data": {
      "ARS": {
        "code": "ARS",
        "value": 845.0048118692
      },
      "AUD": {
        "code": "AUD",
        "value": 1.5369902442
      },
      "BTC": {
        "code": "BTC",
        "value": 1.56579e-5
      },
      "CAD": {
        "code": "CAD",
        "value": 1.3589801458
      },
      "CNY": {
        "code": "CNY",
        "value": 7.1960711317
      },
      "EUR": {
        "code": "EUR",
        "value": 0.920940115
      },
      "GBP": {
        "code": "GBP",
        "value": 0.7871001174
      },
      "JPY": {
        "code": "JPY",
        "value": 149.9807404624
      },
      "USD": {
        "code": "USD",
        "value": 1
      },
    },
  });
});

