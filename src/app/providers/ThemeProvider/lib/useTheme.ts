import { useContext } from "react";

import { LOCALE_STORAGE_THEME_KEY, ThemeContext } from "./ThemeContext";

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(newTheme);
    localStorage.setItem(LOCALE_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
};