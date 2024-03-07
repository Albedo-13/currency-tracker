import "./select.scss";

export default function Select({ currencies }) {
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
