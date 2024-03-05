import axios from "axios";
import { HttpResponse, http } from "msw";

export const handlers = [

  http.get("https://api.currencyapi.com/v3/latest?apikey=cur_live_McVPn095O6nn3dK3OZmnrHf7puqxlPHC7YdDhrBY&currencies=EUR%2CUSD%2CCAD", (req) => {
    console.log('Captured a "GET" request', req.request.url);
    return HttpResponse.json({
      "meta": {
        "last_updated_at": "2024-03-03T23:59:59Z"
      },
      "data": {
        "ADA": {
          "code": "ADA",
          "value": 1.3722768101
        },
        "AED": {
          "code": "AED",
          "value": 3.6718706476
        },
        "AFN": {
          "code": "AFN",
          "value": 73.3559138457
        },
        "ALL": {
          "code": "ALL",
          "value": 95.7827228782
        },
      }
    });
  }),
];
