import { useCallback, useContext } from "react";
import { DEFAULT_THEME } from "../constants";
import { ThemeContext } from "../contexts/Theme/ThemeContext";

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === DEFAULT_THEME ? "light" : DEFAULT_THEME));
  }, [setTheme]);

  return [theme, toggleTheme];
};
