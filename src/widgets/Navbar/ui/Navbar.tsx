import clsx from 'clsx';

import { AppLink } from 'shared/ui';

import css from './Navbar.module.css';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;

  return (
    <div className={clsx(css.Navbar, className)}>
      <ThemeSwitcher />
      <div className={css.links}>
        <AppLink to="/">Home</AppLink>
        <AppLink to="/about">About</AppLink>
      </div>
    </div>
  )
}
