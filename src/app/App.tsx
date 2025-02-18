import clsx from "clsx";

import { Routing } from "pages";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import "shared/config/i18n/i18n";

import "./styles/styles.css";

export const App = () => {
  return (
    <div className={clsx("app")}>
      <Navbar />
      <div className="page-content">
        <Sidebar />
        <div className="page-wrapper">
          <Routing />
        </div>
      </div>
    </div>
  );
};
