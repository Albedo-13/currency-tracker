import "./header.scss";
import Switch from "../Switch/Switch";
import logo from "/logo.svg";
import { Link, NavLink } from "react-router-dom";
import ModalPortal from "../Modal/ModalPortal";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { shouldDisableScroll } from "../../utils/modalHelpers";

const headerLinks = [
  { route: "/", text: "Home" },
  { route: "/timeline", text: "Timeline" },
  { route: "/bank-card", text: "Bank card" },
  { route: "/contact", text: "Contact" },
];

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  const handleModalShow = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  shouldDisableScroll(showModal);
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <Link to="/" className="header-link">
            <img src={logo} alt="currency tracker logo" />
          </Link>
          <div className="header-nav-desktop">
            <HeaderNav />
          </div>
          <div className="header-nav-mobile">
            <div onClick={handleModalShow} className="header-burger">
              <span className="header-burger-line"></span>
              <span className="header-burger-line"></span>
              <span className="header-burger-line"></span>
            </div>
            {showModal && (
              <ModalPortal
                children={
                  <Modal onClose={handleModalClose}>
                    <HeaderNav className="header-nav-vertical" />
                  </Modal>
                }
              />
            )}
          </div>
          <Switch />
        </div>
      </div>
    </header>
  );
}

type THeaderNavProps = {
  className?: string;
};

export function HeaderNav({ className }: THeaderNavProps) {
  return (
    <nav className={`header-nav ${className}`}>
      <ul>
        {headerLinks.map((link) => {
          return (
            <li key={link.route}>
              <NavLink to={link.route} className={({ isActive }) => (isActive ? "gradient-text" : "")}>
                {link.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
