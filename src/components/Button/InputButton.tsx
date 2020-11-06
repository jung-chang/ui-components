import React  from "react";
import { ButtonType, BUTTON_STYLE_MAP } from "./Button";
import LoadingSVG from "src/assets/icons/loading.svg";
import CheckSVG from "src/assets/icons/check.svg";
import styles from "./Button.module.scss";

const SuccessButton = ({ className }: { className?: string }) => {
  return (
    <div className={`${styles.success_button} ${className ? className : ""}`}>
      <CheckSVG />
    </div>
  );
};

const LoadingButton = ({ className }: { className?: string }) => {
  return (
    <div className={`${styles.loading_button} ${className ? className : ""}`}>
      <LoadingSVG />
    </div>
  );
};

const InputButton = ({
  value,
  className,
  onBlur,
  type = ButtonType.DEFAULT,
  loading = false,
  success = false,
}: {
  value: string;
  className?: any;
  onBlur?: () => void;
  type?: ButtonType;
  loading?: boolean;
  success?: boolean;
}) => {
  return success ? (
    <SuccessButton className={`${className ? className : ""}`} />
  ) : loading ? (
    <LoadingButton className={`${className ? className : ""}`} />
  ) : (
    <input
      className={`normal-text-bold ${BUTTON_STYLE_MAP[type]} ${
        className ? className : ""
      }`}
      type="submit"
      value={value}
      onBlur={onBlur}
    ></input>
  );
};

export default InputButton;
