import { NavLink } from "react-router-dom";

import { headerLinks } from "@/constants/constants";

type HeaderNavProps = {
  className?: string;
  onClose?: VoidFunction;
};

export function HeaderNav({ className, onClose }: HeaderNavProps) {
  const handleNavLinkStyles = ({ isActive }: { isActive: boolean }) => {
    return isActive ? "gradient-text" : "";
  };

  return (
    <nav className={`header-nav ${className}`}>
      <ul>
        {headerLinks.map(({ route, text }) => {
          return (
            <li key={route}>
              <NavLink to={route} className={handleNavLinkStyles} onClick={onClose}>
                {text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
