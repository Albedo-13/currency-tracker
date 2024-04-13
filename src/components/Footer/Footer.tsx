import "./footer.scss";

import logo from "/logo.svg";
import { footerLinks } from "@/constants/constants";

import { Accordion } from "./Accordion";
import { FooterNav } from "./FooterNav";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-wrapper__left">
            <div className="footer-logo-wrapper">
              <a href="/" className="footer__img footer__link">
                <img src={logo} alt="currency tracker logo" />
              </a>
              <h2 className="gradient-text">Modsen Currency Tracker</h2>
            </div>
            <p className="footer__description">
              Since then, the company has grown organically to. Starsup is the world's largest trading platform, with
              $12 billion worth of currency trading and 500,000 tickets sold daily to tens of thousands of traders
              worldwide.
            </p>
          </div>
          <nav className="footer-wrapper__right footer-desktop">{<FooterNav />}</nav>
          <nav className="footer-wrapper__right footer-mobile">
            {footerLinks.map(({ label, links }) => {
              return (
                <Accordion title={label} key={label}>
                  {links.map(({ name, href }) => {
                    return (
                      <div className="footer-nav__list-item" key={name}>
                        <a href={href} className="footer__link">
                          {name}
                        </a>
                      </div>
                    );
                  })}
                </Accordion>
              );
            })}
          </nav>
        </div>
        <p className="footer__copyright">Startsup © 2023-2024, All Rights Reserved</p>
      </div>
    </footer>
  );
}
