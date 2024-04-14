import "@testing-library/jest-dom";

import { QueryClient, QueryClientProvider,useQuery } from "@tanstack/react-query";
import { act, fireEvent, queryByTestId, render, renderHook, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { keyboard } from "@testing-library/user-event/dist/cjs/setup/directApi.js";
import axios from "axios";
import { afterEach, beforeEach, describe, expect, expectTypeOf, it, test, vi } from "vitest";

import { getExchangeRate } from "@/api/currencyapi.api";
import App from "@/components/App/App";
import { currenciesCodes } from "@/constants/constants";
import { useExchangeRates } from "@/hooks/useExchangeRates";
import { worker as server } from "@/mocks/browser";

import Modal from "../Modal";
import ExchangeModal from "./ExchangeModal";

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })
  return ({ children }) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

describe("ExchangeModal", () => {
  it("should be something lol!", async () => {
    const currencyCode = "AUD";
    // const response = await axios({
    //   method: "get",
    //   maxBodyLength: Infinity,
    //   url: `${import.meta.env.VITE_BASE_URL}/latest`,
    //   params: {
    //     apikey: import.meta.env.VITE_CURRENCIES_API_KEY,
    //     currencies: currenciesCodes,
    //   },
    // }).then((res) => {
    //   return res;
    // });

    const response = await getExchangeRate();

    screen.debug(undefined, 2000);

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

    const { result, waitFor } = renderHook(() => useExchangeRates(), {
      wrapper: createWrapper(),
    });
    expect(result).toEqual({});

    // render(<ExchangeModal currencyCode={currencyCode}></ExchangeModal>);

  });

  // it("should be ", () => {});
});

// GPT results
jest.mock('react-query');

const mockExchangeRates = {
  data: {
    data: {
      data: {
        // Mocked exchange rate data
      },
    },
  },
};


describe('ExchangeModal', () => {
  let queryClient;

  beforeEach(() => {
    queryClient = new QueryClient();
    useQuery.mockImplementation((queryKey, queryFn) => {
      if (queryKey[0] === 'exchangeRates') {
        return queryFn();
      }
    });
  });

  test('updating FROM input field', () => {
    useQuery.mockReturnValueOnce({
      data: mockExchangeRates,
      isLoading: false,
    });

    const { getByLabelText } = render(
      <QueryClientProvider client={queryClient}>
        <ExchangeModal currencyCode="EUR" />
      </QueryClientProvider>
    );

    const fromInput = getByLabelText('FROM:') as HTMLInputElement;

    fireEvent.change(fromInput, { target: { value: '10' } });

    expect(fromInput.value).toBe('10');
  });
});