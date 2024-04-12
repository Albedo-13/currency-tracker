import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { getExchangeRate } from "@api/currencyapi.api";
import { maxInputLength } from "@constants/constants";
import { convertCurrency } from "@utils/currencyFormatter";
import Select from "@components/Select/Select";

type TProps = {
  currencyCode: string;
};

export default function ExchangeModal({ currencyCode }: TProps) {
  const exchangeRates = useQuery({ queryKey: ["exchangeRates"], queryFn: getExchangeRate });
  const exchangeRatesData = exchangeRates.data?.data.data;

  const [textInputFrom, setTextInputFrom] = useState("");
  const [selectInputFrom, setSelectInputFrom] = useState(currencyCode);
  const [selectInputTo, setSelectInputTo] = useState("USD");

  const textInputFromRef = useRef<HTMLInputElement | null>(null);
  const textInputToRef = useRef<HTMLInputElement | null>(null);

  const handleInputFromChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < maxInputLength) {
      setTextInputFrom(() => e.target.value);
      handleInputToChange(e.target.value);
    }
  };

  const handleDisabledInputClick = () => {
    if (textInputFromRef.current) {
      textInputFromRef.current.focus();
    }
  };

  const handleInputToChange = (newInput: string) => {
    if (textInputToRef.current) {
      textInputToRef.current.value = convertCurrency(+newInput, selectInputFrom, selectInputTo, exchangeRatesData);
    }
  };

  useEffect(() => {
    handleInputToChange(textInputFrom);
  }, [selectInputFrom, selectInputTo]);

  return (
    <>
      <label className="modal-label">
        FROM:
        <Select select={selectInputFrom} setSelect={setSelectInputFrom} />
        <input
          value={textInputFrom}
          onChange={handleInputFromChange}
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
    </>
  );
}
