import "./header.scss";
import Switch from "../Switch/Switch";
import logo from "/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <a href="/" className="header-link">
            <img src={logo} alt="currency tracker logo" />
          </a>
          <nav className="header-nav">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/timeline">Timeline</a>
              </li>
              <li>
                <a href="/bank-card">Bank card</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
            </ul>
          </nav>
          <Switch />
        </div>
      </div>
    </header>
  );
}
