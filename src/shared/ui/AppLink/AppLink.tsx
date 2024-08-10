import { Link, LinkProps } from 'react-router-dom';
import css from './AppLink.module.css';
import clsx from 'clsx';

interface AppLinkProps extends LinkProps {
  className?: string;
  children?: React.ReactNode;
  theme?: 'primary' | 'secondary';
}

export const AppLink = (props: AppLinkProps) => {
  const { className, children, to, theme = 'primary', ...otherProps } = props;

  return (
    <Link
      className={clsx(css.AppLink, className, css[theme])}
      to={to}
      {...otherProps}>
      {children}
    </Link>
  );
};
