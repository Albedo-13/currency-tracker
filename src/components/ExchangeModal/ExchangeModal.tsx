import { SyntheticEvent, useEffect } from "react";
import "./exchangeModal.scss";
import Select from "../Select/Select";

type TProps = {
  currencyCode: string;
  onClose: () => void;
};

export default function ExchangeModal({ currencyCode, onClose }: TProps) {
  const handleCloseClick = (e: SyntheticEvent | KeyboardEvent) => {
    if (e.target === e.currentTarget || (e as KeyboardEvent).key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", handleCloseClick);
    return () => {
      document.body.removeEventListener("keydown", handleCloseClick);
    };
  });

  return (
    <aside aria-modal="true" className="overlay" onClick={handleCloseClick}>
      <div className="modal">
        <span className="modal-close" onClick={onClose}>
          &times;
        </span>
        <h3>FROM:</h3>
        <Select currencyCode={currencyCode} />
        <input autoFocus={true} type="number" />
        <h3>TO:</h3>
        <Select currencyCode="USD" />
        <input type="number" disabled />
      </div>
    </aside>
  );
}
