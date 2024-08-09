import clsx from 'clsx';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useState } from 'react';
import { LangSwitcher } from 'widgets/LangSwitcher';

import css from './Sidebar.module.css';
import { Button } from 'shared/ui/Button/Button';
interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => setCollapsed(prev => !prev);

  return (
    <div className={clsx(css.Sidebar, className, {
      [css.collapsed]: collapsed
    })}>
      <Button onClick={toggleCollapsed}>toggle</Button>
      <div className={css.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  )
}
