import clsx from "clsx";

import { Loader } from "shared/ui";

import css from "./PageLoader.module.css";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = (props: PageLoaderProps) => {
  const { className } = props;

  return (
    <div className={clsx(css.PageLoader, className)}>
      <Loader />
    </div>
  );
};
