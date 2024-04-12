import { footerLinks } from "@/constants/constants";

export function FooterNav() {
  return footerLinks.map((section) => {
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
