import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState("light");

  const toggleDark = () => {
    if (dark === "light") {
      setDark("dark");
    } else {
      setDark("light");
    }
  };

  const themeInfo = { dark, toggleDark };

  return (
    <ThemeContext.Provider value={themeInfo}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
