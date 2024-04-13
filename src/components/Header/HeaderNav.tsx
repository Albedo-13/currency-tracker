import { NavLink } from "react-router-dom";

import { headerLinks } from "@/constants/constants";

type HeaderNavProps = {
  className?: string;
  onClose?: VoidFunction;
};

export function HeaderNav({ className, onClose }: HeaderNavProps) {
  return (
    <nav className={`header-nav ${className}`}>
      <ul>
        {headerLinks.map((link) => {
          const { route, text } = link;
          return (
            <li key={route}>
              <NavLink
                to={route}
                className={({ isActive }) => (isActive ? "gradient-text" : "")}
                onClick={onClose}
              >
                {text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
