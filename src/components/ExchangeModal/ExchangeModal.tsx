import { SyntheticEvent } from "react";
import "./exchangeModal.scss";
import Select from "../Select/Select";

type TProps = {
  currencyCode: string;
  setShowModal: (showModal: boolean) => void;
};

export default function ExchangeModal({ currencyCode, setShowModal }: TProps) {
  const handleCloseClick = (e: SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      e.stopPropagation();
      setShowModal(false);
    }
  };

  return (
    <div className="overlay" onClick={handleCloseClick}>
      <div className="modal">
        <span className="modal-close" onClick={() => setShowModal(false)}>
          &times;
        </span>
        <h3>FROM:</h3>
        <Select currencyCode={currencyCode} />
        <input type="number" />
        <h3>TO:</h3>
        <Select currencyCode="USD" />
        <input type="number" disabled />
      </div>
    </div>
  );
}
