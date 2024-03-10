import "./select.scss";
import { currenciesStaticInfo } from "../../constants/constants";

type TProps = {
  currencyCode?: string;
};

export default function Select({ select, setSelect }: TProps) {
  return (
    <span className="ui-select-base ui-select-extended-icon ui-select-basic">
      <select
        name="select-four"
        className="ui-select"
        // defaultValue={currencyCode}
        value={select}
        onChange={(e) => setSelect(e.target.value)}
      >
        {/* <option className="select-option-disabled" value="empty" disabled={true}>--pick curr--</option> */}
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
