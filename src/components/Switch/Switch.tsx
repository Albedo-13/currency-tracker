import { ThemeContext } from "@/components/Providers/ThemeProvider";
import { useContext } from "react";
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
