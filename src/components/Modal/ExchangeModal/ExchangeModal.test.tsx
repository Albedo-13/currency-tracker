import "@testing-library/jest-dom";

import axios from "axios";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { currenciesCodes } from "@/constants/constants";

vi.mock("@tanstack/react-query");

describe("ExchangeModal", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should successfully fetch", async () => {
    const currencyCode = "AUD";
    const response = await axios({
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

    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(response.data.data).toEqual(
      expect.objectContaining({
        [currencyCode]: {
          code: expect.any(String),
          value: expect.any(Number),
        },
      })
    );
  });
});
