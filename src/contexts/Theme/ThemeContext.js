import { createContext, useState } from "react";
import { DEFAULT_THEME } from "../../constants";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  return <ThemeContext.Provider value={{ theme, setTheme }} {...props} />;
};
