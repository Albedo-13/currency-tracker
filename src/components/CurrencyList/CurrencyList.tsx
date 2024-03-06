import { useEffect, useState } from "react";
import CurrencyGroup from "./CurrencyGroup/CurrencyGroup";
import CurrencyCard from "./CurrencyCard/CurrencyCard";
import { getCurrencyData, getExchangeRate } from "../../api/currencyapi.api";
import "./currencyList.scss";
import type { TCurrency, TExchangeRate } from "../../types/types";

export default function CurrencyList() {
  const [currencies, setCurrencies] = useState<{ [key: string]: TCurrency } | null>(null);
  const [exchangeRates, setExchangeRates] = useState<{ [key: string]: TExchangeRate } | null>(null);
  // TODO: type any

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
          {/* TODO: merge currencyGroup & div with props.children */}
          <CurrencyGroup group={"Stocks"} />
          <div className="currency-cards-list">{/* TODO: Stocks */}</div>

          <CurrencyGroup group={"Quotes"} />
          <section className="currency-cards-list">
            {currencies && exchangeRates
              ? Object.keys(currencies).map((key) => (
                  <CurrencyCard
                    key={currencies[key].code}
                    currency={currencies[key]}
                    exchangeValue={exchangeRates[key]?.value}
                  />
                ))
              : null}
          </section>
        </div>
      </div>
    </section>
  );
}
