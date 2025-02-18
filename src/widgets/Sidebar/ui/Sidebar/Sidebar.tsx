import { useState } from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { AppLink, Button } from "shared/ui";

import css from "./Sidebar.module.css";

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const toggleCollapsed = () => setCollapsed((prev) => !prev);

  return (
    <div
      data-testid="sidebar"
      className={clsx(css.Sidebar, className, {
        [css.collapsed]: collapsed,
      })}
    >
      <div className={css.links}>
        <AppLink to="/" theme="secondary">
          {t("navbarLinkMain")}
        </AppLink>
        <AppLink to="/about" theme="secondary">
          {t("navbarLinkAbout")}
        </AppLink>
      </div>
      <div
        className={clsx(css.switchers, collapsed && [css.switchers_collapsed])}
      >
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
      <Button
        className={css.toggle_btn}
        data-testid="sidebar-toggle"
        theme="background_inverted"
        onClick={toggleCollapsed}
      >
        {collapsed ? ">" : "<"}
      </Button>
    </div>
  );
};
