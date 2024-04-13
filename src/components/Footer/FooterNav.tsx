import { footerLinks } from "@/constants/constants";

export function FooterNav() {
  return footerLinks.map(({ label, links }) => {
    return (
      <div className="footer-nav" key={label}>
        <h3 className="footer-nav-title">{label}</h3>
        <ul className="footer-nav-list">
          {links.map(({ name, href }) => {
            return (
              <li className="footer-nav-list-item" key={name}>
                <a href={href} className="footer-link">
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
