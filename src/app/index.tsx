import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import cx from "clsx";

import { useTheme } from "./providers/ThemeProvider";
import { MainPage } from "pages/Main";
import { AboutPage } from "pages/About";

import "./styles/index.css";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cx("app", theme)}>
      <Link to="/">main</Link>
      <Link to="/about">about</Link>

      <button onClick={toggleTheme}>toggle theme</button>

      <Suspense fallback={<h2>loading...</h2>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
