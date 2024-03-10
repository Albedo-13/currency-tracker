import { ChangeEvent, RefObject, SyntheticEvent, useEffect, useRef, useState } from "react";
import "./exchangeModal.scss";
import Select from "../Select/Select";
import { convertCurrency } from "../../utils/currencyFormatter";
import { useQuery } from "@tanstack/react-query";
import { getExchangeRate } from "../../api/currencyapi.api";

type TProps = {
  currencyCode: string;
  onClose: () => void;
};

export default function ExchangeModal({ currencyCode, onClose }: TProps) {
  // const exchangeRates = useQuery({ queryKey: ["exchangeRates"], queryFn: getExchangeRate });

  const [textInputFrom, setTextInputFrom] = useState("");

  const textInputFromRef = useRef<HTMLInputElement | null>(null);
  const textInputToRef = useRef<HTMLInputElement | null>(null);

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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // convertCurrency();
    setTextInputFrom(() => e.target.value);
    if (textInputToRef.current) {
      textInputToRef.current.value = e.target.value;
    }
  };

  function handleDisabledInputClick() {
    if (textInputFromRef.current) {
      textInputFromRef.current.focus();
    }
  }

  useEffect(() => {
    document.body.addEventListener("keydown", handleEscapeClick);
    return () => {
      document.body.removeEventListener("keydown", handleEscapeClick);
    };
  });

  return (
    <aside aria-modal="true" className="overlay" onMouseDown={handleCloseClick}>
      <div className="modal">
        <span className="modal-close" onMouseDown={handleCloseClick} tabIndex={0}>
          &times;
        </span>
        <label className="modal-label">
          FROM:
          <Select currencyCode={currencyCode} />
          <input
            value={textInputFrom}
            onChange={handleInputChange}
            ref={textInputFromRef}
            id="text-input-from"
            placeholder="Start typing..."
            className="modal-input"
            autoFocus={true}
            type="number"
          />
        </label>
        <label className="modal-label">
          TO:
          <Select />
          <input
            onFocus={handleDisabledInputClick}
            ref={textInputToRef}
            id="text-input-to"
            onChange={() => {}}
            className="modal-input modal-input_readonly"
            type="number"
            readOnly={true}
          />
        </label>
      </div>
    </aside>
  );
}
