import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import css from './Button.module.css';
import clsx from "clsx";


interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string;
  theme?: 'clear';
}

export const Button = (props: ButtonProps) => {
  const { className, children, theme, ...otherProps } = props;

  return (
    <button
      className={clsx(css.Button, className, [css[theme]])}
      {...otherProps}>
      {children}
    </button>
  );
};
