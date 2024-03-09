import "./select.scss";
import { currenciesStaticInfo } from "../../constants/constants";

type TProps = {
  pickedCurrency?: string;
}

export default function Select({ pickedCurrency = "USD" }: TProps) {

  return (
    <span className="ui-select-base ui-select-extended-icon ui-select-basic">
      <select name="select-four" className="ui-select" defaultValue={pickedCurrency}>
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
