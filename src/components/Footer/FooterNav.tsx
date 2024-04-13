import { footerLinks } from "@/constants/constants";

export function FooterNav() {
  return footerLinks.map(({ label, links }) => {
    return (
      <div className="footer-nav" key={label}>
        <h3 className="footer-nav__title">{label}</h3>
        <ul className="footer-nav__list">
          {links.map(({ name, href }) => {
            return (
              <li className="footer-nav__list-item" key={name}>
                <a href={href} className="footer__link">
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  });
}
