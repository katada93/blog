import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

import { AppLink } from 'shared/ui';

import css from './Navbar.module.css';

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={clsx(css.Navbar, className)}>
      <div className={css.links}>
        <AppLink to="/">{t('navbarLinkMain')}</AppLink>
        <AppLink to="/about">{t('navbarLinkAbout')}</AppLink>
      </div>
    </div>
  );
};
