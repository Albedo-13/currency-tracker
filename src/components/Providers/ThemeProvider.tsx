import { createContext, PropsWithChildren, ReactNode, useEffect, useState } from "react";

type ThemeProviderType = {
  children: PropsWithChildren<ReactNode>;
};

export const ThemeContext = createContext({
  theme: true,
  toggleTheme: () => {},
});

export default function ThemeProvider({ children }: ThemeProviderType) {
  const [theme, setTheme] = useState(localStorage.getItem("currency-tracker-theme") === "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme ? "light": "dark");
    localStorage.setItem("currency-tracker-theme", theme ? "light" : "dark");
  }, [theme]);

  const toggleThemeHandler = () => {
    setTheme((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleThemeHandler }}>{children}</ThemeContext.Provider>
  );
}
