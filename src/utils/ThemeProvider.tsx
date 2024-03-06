import React, { createContext, useState } from "react";

type TThemeProvider = {
  children: React.ReactNode;
};

export const ThemeContext = createContext({
  theme: true,
  toggleTheme: () => {},
});

export default function ThemeProvider({ children }: TThemeProvider) {
  const [theme, setTheme] = useState(localStorage.getItem("currency-tracker-theme") === "dark" ? true : false);

  const toggleThemeHandler = () => {
    setTheme((prevState) => {
      // const storagedTheme = localStorage.getItem("currency-tracker-theme");
      return !prevState;
    });
  };

  // const value = { theme: theme, toggleTheme: toggleThemeHandler };
  // console.log(theme, value);
  console.log(theme);

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleThemeHandler }}>{children}</ThemeContext.Provider>
  );
}
