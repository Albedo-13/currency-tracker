import { headerLinks } from "@/constants/constants";
import { NavLink } from "react-router-dom";

type HeaderNavProps = {
  className?: string;
  onClose?: () => void;
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
