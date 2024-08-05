import clsx from 'clsx';

import { AppLink } from 'shared/ui';

import css from './Navbar.module.css';

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;

  return (
    <div className={clsx(css.Navbar, className)}>
      <div className={css.links}>
        <AppLink to="/">Home</AppLink>
        <AppLink to="/about">About</AppLink>
      </div>
    </div>
  )
}
