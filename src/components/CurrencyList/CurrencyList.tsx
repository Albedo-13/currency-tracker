import { useState } from "react";
import CurrencyGroup from "./CurrencyGroup/CurrencyGroup";
import CurrencyCard from "./CurrencyCard/CurrencyCard";
import { getExchangeRate } from "../../api/currencyapi.api";
import "./currencyList.scss";
import ExchangeModal from "../ExchangeModal/ExchangeModal";
import { useQuery } from "@tanstack/react-query";
import { currenciesStaticInfo } from "../../constants/constants";
import ModalPortal from "../ExchangeModal/ModalPortal";

export default function CurrencyList() {
  const [showModal, setShowModal] = useState(false);
  const [currencyCode, setCurrencyCode] = useState<string>("");

  const exchangeRates = useQuery({ queryKey: ["exchangeRates"], queryFn: getExchangeRate });
  const exchangeRatesData = exchangeRates.data?.data.data;

  const handleModalShow = (key: string) => {
    setShowModal(true);
    setCurrencyCode(key);
  };

  const handleModalClose = () => {
    setShowModal(false);
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
                  onClick={() => handleModalShow(key)}
                />
              ))}
          </section>
        </div>
      </div>
      {showModal && (
        <ModalPortal children={<ExchangeModal currencyCode={currencyCode} onClose={handleModalClose} />} />
      )}
    </section>
  );
}
