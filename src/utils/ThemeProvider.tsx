import React, { createContext, useState } from "react";

type TThemeProvider = {
  children: React.ReactNode;
};

export const ThemeContext = createContext({
  theme: true,
  toggleTheme: () => {},
});

export default function ThemeProvider({ children }: TThemeProvider) {
  const [theme, setTheme] = useState(true);

  const toggleThemeHandler = () => {
    setTheme((prevState) => !prevState);
  };

  // const value = { theme: theme, toggleTheme: toggleThemeHandler };
  // console.log(theme, value);
  console.log(theme);

  return <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleThemeHandler }}>{children}</ThemeContext.Provider>;
}
