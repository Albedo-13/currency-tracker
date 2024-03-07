import { useEffect, useState } from "react";
import CurrencyGroup from "./CurrencyGroup/CurrencyGroup";
import CurrencyCard from "./CurrencyCard/CurrencyCard";
import { getCurrencyData, getExchangeRate } from "../../api/currencyapi.api";
import "./currencyList.scss";
import type { TCurrency, TExchangeRate } from "../../types/types";
import ExchangeModal from "../ExchangeModal/ExchangeModal";
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function CurrencyList() {
  // TODO: rewrite types
  const [currencies, setCurrencies] = useState<{ [key: string]: TCurrency } | null>(null);
  const [exchangeRates, setExchangeRates] = useState<{ [key: string]: TExchangeRate } | null>(null);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    getCurrencyData().then((res) => setCurrencies(res.data.data));
    getExchangeRate().then((res) => setExchangeRates(res.data.data));
  }, []);

  // console.log("currencies", currencies);
  // console.log("rates", exchangeRates);
  return (
    <section className="currency">
      <div className="container">
        <div className="currency-wrapper">
          <CurrencyGroup group={"Stocks"} />
          <div className="currency-cards-list">{/* TODO: Stocks */}</div>

          <CurrencyGroup group={"Quotes"} />
          <section className="currency-cards-list">
            {currencies &&
              exchangeRates &&
              Object.keys(currencies).map((key) => (
                <CurrencyCard
                  key={currencies[key].code}
                  currency={currencies[key]}
                  exchangeValue={exchangeRates[key]?.value}
                  onClick={() => setShowModal(true)}
                  // TODO: wrap setShowModal
                />
              ))}
          </section>
        </div>
      </div>
      <ExchangeModal showModal={showModal} setShowModal={setShowModal} />
    </section>
  );
}
