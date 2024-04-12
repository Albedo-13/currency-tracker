import type { Dispatch, SetStateAction } from "react";
import { currenciesStaticInfo } from "../../constants/constants";
import "./select.scss";

type TProps = {
  select: string;
  currencyCode?: string;
  setSelect: Dispatch<SetStateAction<string>> | ((value: string) => void); // setState OR wrapper function around setState
};

export default function Select({ select, setSelect }: TProps) {
  return (
    <span className="ui-select-base ui-select-extended-icon ui-select-basic">
      <select name="select-four" className="ui-select" value={select} onChange={(e) => setSelect(e.target.value)}>
        {Object.entries(currenciesStaticInfo).map(([key, value]) => {
          return (
            <option value={value.code} key={key}>
              {value.name}
            </option>
          );
        })}
      </select>
    </span>
  );
}
