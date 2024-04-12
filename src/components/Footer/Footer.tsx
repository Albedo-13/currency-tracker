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
          <div className="footer-wrapper-left">
            <div className="footer-logo-wrapper">
              <a href="/" className="footer-img footer-link">
                <img src={logo} alt="currency tracker logo" />
              </a>
              <h2 className="footer-title gradient-text">Modsen Currency Tracker</h2>
            </div>
            <p className="footer-description">
              Since then, the company has grown organically to. Starsup is the world's largest trading platform, with
              $12 billion worth of currency trading and 500,000 tickets sold daily to tens of thousands of traders
              worldwide.
            </p>
          </div>
          <nav className="footer-wrapper-right footer-desktop">{<FooterNav />}</nav>
          <nav className="footer-wrapper-right footer-mobile">
            {footerLinks.map((section) => {
              return (
                <Accordion title={section.label} key={section.label}>
                  {section.links.map((link) => {
                    const { name, href } = link;
                    return (
                      <div className="footer-nav-list-item" key={name}>
                        <a href={href} className="footer-link">
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
        <p className="footer-copyright">Startsup © 2023-2024, All Rights Reserved</p>
      </div>
    </footer>
  );
}
