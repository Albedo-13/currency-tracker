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
  console.log(theme);

  const toggleThemeHandler = () => {
    setTheme((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: toggleThemeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
}
