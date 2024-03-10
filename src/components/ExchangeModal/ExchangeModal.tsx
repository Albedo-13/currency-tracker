import { ChangeEvent, SyntheticEvent, useEffect, useRef, useState } from "react";
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
  const exchangeRates = useQuery({ queryKey: ["exchangeRates"], queryFn: getExchangeRate });
  const exchangeRatesData = exchangeRates.data?.data.data;

  const [textInputFrom, setTextInputFrom] = useState("");
  const [selectInputFrom, setSelectInputFrom] = useState(currencyCode);
  const [selectInputTo, setSelectInputTo] = useState("USD");

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

  // TODO: rerender on select change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextInputFrom(() => e.target.value);
    if (textInputToRef.current) {
      textInputToRef.current.value = convertCurrency(+e.target.value, selectInputFrom, selectInputTo, exchangeRatesData);
      // textInputToRef.current.value = e.target.value;
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

  console.log("from", selectInputFrom, "to", selectInputTo);
  return (
    <aside aria-modal="true" className="overlay" onMouseDown={handleCloseClick}>
      <div className="modal">
        <span className="modal-close" onMouseDown={handleCloseClick} tabIndex={0}>
          &times;
        </span>
        <label className="modal-label">
          FROM:
          <Select select={selectInputFrom} setSelect={setSelectInputFrom} />
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
          <Select select={selectInputTo} setSelect={setSelectInputTo} />
          <input
            onFocus={handleDisabledInputClick}
            ref={textInputToRef}
            id="text-input-to"
            className="modal-input modal-input_readonly"
            type="number"
            readOnly={true}
          />
        </label>
      </div>
    </aside>
  );
}
