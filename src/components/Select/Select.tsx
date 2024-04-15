import "./select.scss";

import { currenciesStaticInfo } from "@constants/constants";
import type { ChangeEvent, Dispatch, SetStateAction } from "react";

type SelectProps = {
  select: string;
  currencyCode?: string;
  setSelect: Dispatch<SetStateAction<string>> | ((value: string) => void); // setState OR wrapper function around setState
};

export default function Select({ select, setSelect }: SelectProps) {
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
  };

  return (
    <span className="ui-select__base ui-select__extended-icon ui-select__basic">
      <select name="select-four" className="ui-select" value={select} onChange={handleSelectChange}>
        {Object.entries(currenciesStaticInfo).map(([key, { name, code }]) => {
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
