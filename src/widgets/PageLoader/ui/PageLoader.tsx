import { Loader } from 'shared/ui/Loader';

import css from './PageLoader.module.css';
import clsx from 'clsx';

interface PageLoaderProps {
  className?: string
}

export const PageLoader = (props: PageLoaderProps) => {
  const { className } = props;

  return (
    <div className={clsx(css.PageLoader, className)}>
      <Loader />
    </div>
  );
};
