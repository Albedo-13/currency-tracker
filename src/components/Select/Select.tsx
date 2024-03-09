import "./select.scss";

export default function Select() {
  // {currenciesData &&
  //   Object.keys(currenciesData).map((key) => {
  //     return (
  //       <option value={currenciesData[key].code} key={currenciesData[key].code}>
  //         {currenciesData[key].name}
  //       </option>
  //     );
  //   })}
  
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
