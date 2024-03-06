import { useEffect, useState } from "react";
import CurrencyGroup from "./CurrencyGroup/CurrencyGroup";
import CurrencyCard from "./CurrencyCard/CurrencyCard";
import { getCurrencyData } from "../../api/currencyapi.api";
import "./currencyList.scss";

export default function CurrencyList() {
  const [currencies, setCurrencies] = useState<any>(null);
  const [exchangeRates, setExchangeRates] = useState<any>(true);
  // TODO: type any

  useEffect(() => {
    getCurrencyData().then((res) => setCurrencies(res.data.data));
  }, []);

  console.log("currencies", currencies);
  return (
    <section className="currency">
      <div className="container">
        <div className="currency-wrapper">
          {/* TODO: merge currencyGroup & div with props.children */}
          <CurrencyGroup group={"Stocks"} />
          <div className="currency-cards-list">
            {/* <CurrencyCard />
            <CurrencyCard /> */}
          </div>

          <CurrencyGroup group={"Quotes"} />
          <section className="currency-cards-list">
            {currencies && exchangeRates
              ? Object.keys(currencies).map((key) => (
                  <CurrencyCard key={currencies[key].code} currency={currencies[key]} />
                ))
              : null}
          </section>
        </div>
      </div>
    </section>
  );
}
