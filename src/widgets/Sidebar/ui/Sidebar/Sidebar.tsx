import { useState } from "react";
import clsx from "clsx";

import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Button } from "shared/ui/Button/Button";

import css from "./Sidebar.module.css";

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => setCollapsed((prev) => !prev);

  return (
    <div
      data-testid="sidebar"
      className={clsx(css.Sidebar, className, {
        [css.collapsed]: collapsed,
      })}
    >
      <Button data-testid="sidebar-toggle" theme="outline" onClick={toggleCollapsed}>toggle</Button>
      <div className={css.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
