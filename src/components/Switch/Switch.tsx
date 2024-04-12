import { useContext } from "react";
import { ThemeContext } from "../../utils/ThemeProvider";
import "./switch.scss";

export default function Switch() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <label className="switch" htmlFor="switch-theme">
      <input id="switch-theme" type="checkbox" onChange={toggleTheme} checked={!theme} />
      <span className="switch-slider round"></span>
    </label>
  );
}
