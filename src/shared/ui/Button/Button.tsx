import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import clsx from "clsx";

import css from "./Button.module.css";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  theme?:
    | "clear"
    | "clear_inverted"
    | "outline"
    | "background"
    | "background_inverted";
}

export const Button = (props: ButtonProps) => {
  const { className, children, theme, ...otherProps } = props;

  return (
    <button
      data-testid="button"
      className={clsx(css.Button, className, [css[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
