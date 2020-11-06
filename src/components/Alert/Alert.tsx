import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Alert.module.scss";

export enum AlertType {
  INFO = "info",
  SUCCESS = "success",
  ERROR = "error",
}

export const ALERT_STYLE_MAP = {
  [AlertType.INFO]: styles.alert_info,
  [AlertType.SUCCESS]: styles.alert_success,
  [AlertType.ERROR]: styles.alert_error,
};

const alertRootId = "alert-root";

class BaseAlert extends React.Component {
  element: HTMLElement;
  alertRoot: HTMLElement;

  constructor(props: any) {
    super(props);

    if (!document.getElementById(alertRootId)) {
      const root = document.createElement("div");
      root.setAttribute("id", alertRootId);
      document.body.appendChild(root);
    }
    this.alertRoot = document.getElementById(alertRootId)!;
    this.element = document.createElement("div");
    this.element.className = styles.alert;
  }

  componentDidMount() {
    this.alertRoot.innerHTML = ""; // Remove all other modals first.
    this.alertRoot.appendChild(this.element);
  }

  componentWillUnmount() {
    this.alertRoot.removeChild(this.element);
  }

  render() {
    return createPortal(this.props.children, this.element);
  }
}

const Alert = ({
  children,
  className,
  onAlert,
  type = AlertType.INFO,
}: {
  children?: any;
  className?: any;
  onAlert?: () => void;
  type?: AlertType;
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        onAlert();
      }, 300);
    }, 3000);
  }, []);

  return (
    <BaseAlert>
      <div
        className={`${visible ? "" : styles.fade_out} ${
          ALERT_STYLE_MAP[type]
        } ${className ? className : ""}`}
      >
        <div className={`${styles.alert_text}`}>{children}</div>
      </div>
    </BaseAlert>
  );
};

export default Alert;
