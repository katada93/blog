
import clsx from 'clsx';

import css from './Loader.module.css';

interface LoaderProps {
  className?: string;
}

export const Loader = (props: LoaderProps) => {
  const { className } = props;

  return (
    <div className={clsx(css.Loader, className)} />
  );
};
