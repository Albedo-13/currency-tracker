import { useState } from "react";
import CurrencyGroup from "./CurrencyGroup/CurrencyGroup";
import CurrencyCard from "./CurrencyCard/CurrencyCard";
import { getExchangeRate } from "../../api/currencyapi.api";
import "./currencyList.scss";
import ExchangeModal from "../ExchangeModal/ExchangeModal";
import { useQuery } from "@tanstack/react-query";
import { currenciesStaticInfo } from "../../constants/constants";
import ModalPortal from "../ExchangeModal/ModalPortal";
import { modalRoot } from "../../constants/constants";

export default function CurrencyList() {
  const [showModal, setShowModal] = useState(false);

  const exchangeRates = useQuery({ queryKey: ["exchangeRates"], queryFn: getExchangeRate });
  const exchangeRatesData = exchangeRates.data?.data.data;

  const handleModalShow = () => {
    setShowModal(true);
  };

  return (
    <section className="currency">
      <div className="container">
        <div className="currency-wrapper">
          <CurrencyGroup group={"Stocks"} />
          <div className="currency-cards-list">{/* TODO: Stocks */}</div>

          <CurrencyGroup group={"Quotes"} />
          <section className="currency-cards-list">
            {exchangeRatesData &&
              Object.keys(currenciesStaticInfo).map((key) => (
                <CurrencyCard
                  key={currenciesStaticInfo[key as keyof typeof currenciesStaticInfo]?.code}
                  currency={currenciesStaticInfo[key as keyof typeof currenciesStaticInfo]}
                  exchangeValue={exchangeRatesData[key]?.value}
                  onClick={handleModalShow}
                  // TODO: wrap setShowModal
                />
              ))}
          </section>
        </div>
      </div>
      {showModal && (
        <ModalPortal selector={modalRoot as HTMLElement} children={<ExchangeModal setShowModal={setShowModal} />} />
      )}
    </section>
  );
}
