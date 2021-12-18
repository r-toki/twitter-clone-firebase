import classNames from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps, VFC } from "react";

import style from "./style.module.css";

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  size?: "md";
  variant?: "primary";
};

export const Button: VFC<ButtonProps> = ({
  size = "md",
  variant = "primary",
  className,
  ...restProps
}) => {
  return (
    <button
      className={classNames(className, style["btn"], style[`btn-${size}`], style[`btn-${variant}`])}
      {...restProps}
    />
  );
};
