import { useExchangeRates } from "@/hooks/useExchangeRates";
import { currenciesStaticInfo } from "@constants/constants";
import { shouldDisableScroll } from "@utils/modalHelpers";
import { useState } from "react";
import ExchangeModal from "../Modal/ExchangeModal/ExchangeModal";
import Modal from "../Modal/Modal";
import ModalPortal from "../Modal/ModalPortal";
import CurrencyCard from "./CurrencyCard/CurrencyCard";
import CurrencyGroup from "./CurrencyGroup/CurrencyGroup";
import "./currencyList.scss";

export default function CurrencyList() {
  const [showModal, setShowModal] = useState(false);
  const [currencyCode, setCurrencyCode] = useState("");

  const exchangeRates = useExchangeRates();
  const exchangeRatesData = exchangeRates.data?.data.data;

  const handleModalShow = (key: string) => {
    setShowModal(true);
    setCurrencyCode(key);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  shouldDisableScroll(showModal);
  return (
    <section className="currency">
      <div className="container">
        <div className="currency-wrapper">
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
        <ModalPortal
          children={
            <Modal onClose={handleModalClose}>
              <ExchangeModal currencyCode={currencyCode} />
            </Modal>
          }
        />
      )}
    </section>
  );
}
