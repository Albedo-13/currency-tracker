import { currenciesStaticInfo } from "@constants/constants";
import type { Dispatch, SetStateAction } from "react";
import "./select.scss";

type SelectProps = {
  select: string;
  currencyCode?: string;
  setSelect: Dispatch<SetStateAction<string>> | ((value: string) => void); // setState OR wrapper function around setState
};

export default function Select({ select, setSelect }: SelectProps) {
  return (
    <span className="ui-select-base ui-select-extended-icon ui-select-basic">
      <select name="select-four" className="ui-select" value={select} onChange={(e) => setSelect(e.target.value)}>
        {Object.entries(currenciesStaticInfo).map(([key, value]) => {
          const { name, code } = value;
          return (
            <option value={code} key={key}>
              {name}
            </option>
          );
        })}
      </select>
    </span>
  );
}
