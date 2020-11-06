import React  from "react";
import { ButtonType, BUTTON_STYLE_MAP } from "./Button";

const LinkButton = ({
  href,
  children,
  className,
  type = ButtonType.DEFAULT,
}: {
  href: string;
  children?: any;
  className?: any;
  type?: ButtonType;
}) => {
  return (
      <a href={href} className={`${BUTTON_STYLE_MAP[type]} ${className ? className : ""}`}>
        <span>{children}</span>
      </a>
  );
};

export default LinkButton;
