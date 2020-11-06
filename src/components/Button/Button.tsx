import React  from "react";
import styles from "./Button.module.scss";

export enum ButtonType {
  DEFAULT = "default",
  PRIMARY = "primary",
  WARNING = "warning",
}

export const BUTTON_STYLE_MAP = {
  [ButtonType.DEFAULT]: styles.button_white,
  [ButtonType.PRIMARY]: styles.button_primary,
  [ButtonType.WARNING]: styles.button_red,
};

const Button = ({
  onClick,
  children,
  className,
  type = ButtonType.DEFAULT,
}: {
  onClick: () => void;
  children?: any;
  className?: any;
  type?: ButtonType;
}) => {
  return (
    <button
      className={`${BUTTON_STYLE_MAP[type]} ${
        className ? className : ""
        }`}
      onClick={(event: any) => {
        event.preventDefault();
        onClick();
      }}
    >
      <span className="normal-text-bold">{children}</span>
    </button>
  );
};

export default Button;
