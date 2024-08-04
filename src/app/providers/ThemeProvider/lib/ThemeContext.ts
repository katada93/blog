import { createContext } from "react";

export type Theme = "light" | "dark";

export const LOCALE_STORAGE_THEME_KEY = "theme";

interface ThemeContextProps {
  theme?: Theme;
  setTheme?: React.Dispatch<React.SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextProps>({});