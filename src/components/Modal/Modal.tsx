import React from "react";
import { createPortal } from "react-dom";
import Button from "../Button/Button";
import styles from "./Modal.module.scss";

const modalRootId = "modal-root";

class BaseModal extends React.Component {
  element: HTMLElement;
  modalRoot: HTMLElement;

  constructor(props: any) {
    super(props);

    if (!document.getElementById(modalRootId)) {
      const root = document.createElement("div");
      root.setAttribute("id", modalRootId);
      document.body.appendChild(root);
    }
    this.modalRoot = document.getElementById(modalRootId)!;
    this.element = document.createElement("div");
    this.element.className = styles.modal;
  }

  blur() {
    const elements = document.getElementsByClassName("layout");
    if (elements[0]) {
      (elements[0] as HTMLElement).style.filter = "blur(2px)";
      (elements[0] as HTMLElement).style.pointerEvents = "none";
    }
  }

  unblur() {
    const elements = document.getElementsByClassName("layout");
    if (elements[0]) {
      (elements[0] as HTMLElement).style.filter = "none";
      (elements[0] as HTMLElement).style.pointerEvents = "all";
    }
  }

  componentDidMount() {
    this.modalRoot.innerHTML = ""; // Remove all other modals first.
    this.modalRoot.appendChild(this.element);
    this.blur();
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.element);
    this.unblur();
  }

  render() {
    return createPortal(this.props.children, this.element);
  }
}

const Modal = ({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children?: any;
}) => {
  return (
    <BaseModal>
      <Button onClick={onClose}>Close</Button>
      <span >{title}</span>
      {children}
    </BaseModal>
  );
};

export default Modal;
