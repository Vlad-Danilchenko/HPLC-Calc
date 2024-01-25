import { Children, useEffect } from "react";
import { createPortal } from "react-dom";
import { Backdrop, BodyModal } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ isOpen, children }) => {
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === "Escape") {
        isOpen();
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  });

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      isOpen();
    }
  };

  return createPortal(
    <>
      <Backdrop onClick={handleBackdropClick}>
        <BodyModal>{children}</BodyModal>
      </Backdrop>
    </>,
    modalRoot
  );
};

export default Modal;
