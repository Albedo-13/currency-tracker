import { SyntheticEvent } from "react";
import "./exchangeModal.scss";
import Select from "../Select/Select";

type TProps = {
  setShowModal: (showModal: boolean) => void;
};

export default function ExchangeModal({ setShowModal }: TProps) {
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
        <Select pickedCurrency="CAD" />
        <input type="number" />
        <h3>TO:</h3>
        <Select />
        <input type="number" disabled />
      </div>
    </div>
  );
}
