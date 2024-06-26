import "./header.scss";

import { shouldDisableScroll } from "@utils/modalHelpers";
import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "/logo.svg";

import Modal from "../Modal/Modal";
import ModalPortal from "../Modal/ModalPortal";
import Switch from "../Switch/Switch";
import { HeaderNav } from "./HeaderNav";

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
          <Link to="/" className="header__link">
            <img src={logo} alt="currency tracker logo" />
          </Link>
          <div className="header-nav-desktop">
            <HeaderNav />
          </div>
          <div className="header-nav-mobile">
            <div onClick={handleModalShow} className="header-burger">
              <span className="header-burger__line"></span>
              <span className="header-burger__line"></span>
              <span className="header-burger__line"></span>
            </div>
            {showModal && (
              <ModalPortal
                children={
                  <Modal onClose={handleModalClose}>
                    <HeaderNav onClose={handleModalClose} className="header-nav header-nav_vertical" />
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


