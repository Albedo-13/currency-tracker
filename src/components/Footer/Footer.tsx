import "./footer.scss";
import logo from "/logo.svg";

type TLink = {
  label: string;
  links: {
    name: string;
    href: string;
  }[];
};

const footerLinks: TLink[] = [
  {
    label: "General",
    links: [
      { name: "Market", href: "/market" },
      { name: "Service", href: "/service" },
    ],
  },
  {
    label: "Product",
    links: [
      { name: "Sparks", href: "/sparks" },
      { name: "Snaps", href: "/snaps" },
    ],
  },
  {
    label: "Community",
    links: [
      { name: "Ideas", href: "/ideas" },
      { name: "Streams", href: "/streams" },
    ],
  },
];

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
          <div className="footer-wrapper-right">{renderFooterLinks(footerLinks)}</div>
        </div>
        <p className="footer-copyright">Startsup © 2023-2024, All Rights Reserved</p>
      </div>
    </footer>
  );
}

function renderFooterLinks(linksList: TLink[]) {
  return linksList.map((section) => {
    return (
      <nav className="footer-nav">
        <h3 className="footer-nav-title">{section.label}</h3>
        <ul className="footer-nav-list">
          {section.links.map((link) => {
            return (
              <li className="footer-nav-list-item">
                <a href={link.href} className="footer-link">
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  });
}
