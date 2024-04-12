import { footerLinks } from "@/constants/constants";
import { FooterLinkType } from "@/types/types";
import { useState } from "react";
import "./footer.scss";
import logo from "/logo.svg";

export default function Footer() {
  function renderFooterLinks(linksList: FooterLinkType[]) {
    return linksList.map((section) => {
      return (
        <div className="footer-nav" key={section.label}>
          <h3 className="footer-nav-title">{section.label}</h3>
          <ul className="footer-nav-list">
            {section.links.map((link) => {
              return (
                <li className="footer-nav-list-item" key={link.name}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      );
    });
  }

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
          <nav className="footer-wrapper-right footer-desktop">{renderFooterLinks(footerLinks)}</nav>
          <nav className="footer-wrapper-right footer-mobile">
            {footerLinks.map((section) => {
              return (
                <Accordion title={section.label} key={section.label}>
                  {section.links.map((link) => {
                    return (
                      <div className="footer-nav-list-item" key={link.name}>
                        <a href={link.href} className="footer-link">
                          {link.name}
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

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2 className="accordion-title">{title}</h2>
        <span className={`accordion-icon ${isOpen ? "accordion-open" : ""}`}></span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
}

export { Accordion };

