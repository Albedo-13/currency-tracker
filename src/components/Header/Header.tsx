import "./header.scss";
import Switch from "../Switch/Switch";
import logo from "/logo.svg";
import { Link } from "react-router-dom";

const headerLinks = [
  { route: "/", text: "Home" },
  { route: "/timeline", text: "Timeline" },
  { route: "/bank-card", text: "Bank card" },
  { route: "/#", text: "Contato" },
];

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <Link to="/" className="header-link">
            <img src={logo} alt="currency tracker logo" />
          </Link>
          <nav className="header-nav">
            <ul>
              {headerLinks.map((link) => {
                return (
                  <li key={link.route}>
                    <Link to={link.route}>{link.text}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <Switch />
        </div>
      </div>
    </header>
  );
}
