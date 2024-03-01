import "./switch.scss";

export default function Switch() {
  return (
    <label className="switch" htmlFor="switch-theme">
      <input id="switch-theme" type="checkbox" />
      <span className="switch-slider round"></span>
    </label>
  );
}
