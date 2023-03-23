import { Link } from "react-router-dom";
import cx from "clsx";

import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/ThemeProvider";

import "./styles/index.css";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cx("app", theme)}>
      <Link to="/">main</Link>
      <Link to="/about">about</Link>

      <button onClick={toggleTheme}>toggle theme</button>

      <AppRouter />
    </div>
  );
};
