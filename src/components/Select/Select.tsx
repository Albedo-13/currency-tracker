import { useQuery } from "@tanstack/react-query";
import "./select.scss";
import { getCurrencyData } from "../../api/currencyapi.api";

export default function Select() {
  const currencies = useQuery({ queryKey: ["currencies"], queryFn: getCurrencyData });
  console.log("currencies from select", currencies);
  return (
    <span className="ui-select-base ui-select-extended-icon ui-select-basic">
      <select name="select-four" className="ui-select">
        <option value="">Dollar</option>
        <option value="">Euro</option>
        <option value="">Rubble</option>
        <option value="">Yen</option>
      </select>
    </span>
  );
}
