import { SyntheticEvent, useEffect } from "react";
import "./exchangeModal.scss";
import Select from "../Select/Select";

type TProps = {
  currencyCode: string;
  onClose: () => void;
};

export default function ExchangeModal({ currencyCode, onClose }: TProps) {
  const handleCloseClick = (e: SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleEscapeClick = (e: KeyboardEvent) => {
    if ((e as KeyboardEvent).key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", handleEscapeClick);
    return () => {
      document.body.removeEventListener("keydown", handleEscapeClick);
    };
  });

  return (
    <aside aria-modal="true" className="overlay" onClick={handleCloseClick}>
      <div className="modal">
        <span className="modal-close" onClick={handleCloseClick}>
          &times;
        </span>
        <label className="modal-label">
          FROM:
          <Select currencyCode={currencyCode} />
          <input placeholder="Start typing..." className="modal-input" autoFocus={true} type="number" />
        </label>
        <label className="modal-label">
          TO:
          <Select />
          <input className="modal-input" type="number" disabled />
        </label>
      </div>
    </aside>
  );
}
