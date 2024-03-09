import { useState } from "react";
import CurrencyGroup from "./CurrencyGroup/CurrencyGroup";
import CurrencyCard from "./CurrencyCard/CurrencyCard";
import { getCurrencyData, getExchangeRate } from "../../api/currencyapi.api";
import "./currencyList.scss";
import ExchangeModal from "../ExchangeModal/ExchangeModal";
import { useQuery } from "@tanstack/react-query";

export default function CurrencyList() {
  const currencies = useQuery({ queryKey: ["currencies"], queryFn: getCurrencyData });
  const exchangeRates = useQuery({ queryKey: ["exchangeRates"], queryFn: getExchangeRate });
  const [showModal, setShowModal] = useState(false);

  const currenciesData = currencies.data?.data.data;
  const exchangeRatesData = exchangeRates.data?.data.data;

  // TODO: modal through portal

  return (
    <section className="currency">
      <div className="container">
        <div className="currency-wrapper">
          <CurrencyGroup group={"Stocks"} />
          <div className="currency-cards-list">{/* TODO: Stocks */}</div>

          <CurrencyGroup group={"Quotes"} />
          <section className="currency-cards-list">
            {currenciesData &&
              exchangeRatesData &&
              Object.keys(currenciesData).map((key) => (
                <CurrencyCard
                  key={currenciesData[key]?.code}
                  currency={currenciesData[key]}
                  exchangeValue={exchangeRatesData[key]?.value}
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
