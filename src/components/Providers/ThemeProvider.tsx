import { createContext, PropsWithChildren, ReactNode, useEffect, useState } from "react";

type ThemeProviderType = {
  children: PropsWithChildren<ReactNode>;
};

export const ThemeContext = createContext({
  theme: true,
  toggleTheme: () => {},
});

export default function ThemeProvider({ children }: ThemeProviderType) {
  const [theme, setTheme] = useState(localStorage.getItem("currency-tracker-theme") === "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme ? "dark" : "light");
    localStorage.setItem("currency-tracker-theme", theme ? "dark" : "light");
  }, [theme]);

  const toggleThemeHandler = () => {
    setTheme((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleThemeHandler }}>{children}</ThemeContext.Provider>
  );
}
