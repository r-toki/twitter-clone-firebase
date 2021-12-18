import classNames from "classnames";
import {
  DetailedHTMLProps,
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  VFC,
} from "react";

import style from "./style.module.css";

type Input = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export type InputProps = Input & {
  size?: "md";
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size = "md", className, ...restProps }, ref) => {
    return (
      <input
        ref={ref}
        className={classNames(className, style["input"], style[`input-${size}`])}
        {...restProps}
      />
    );
  }
);
Input.displayName = "Input";

export type InputErrorMessageProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const InputErrorMessage: VFC<InputErrorMessageProps> = ({
  className,
  children,
  ...restProps
}) => {
  return (
    <div className={classNames(className, style["input-error-message"])} {...restProps}>
      {children}
    </div>
  );
};

type Label = DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;

export type LabelProps = Label;

export const Label: VFC<LabelProps> = ({ className, ...restProps }) => {
  return <label className={classNames(className, style["label"])} {...restProps} />;
};
