import React, { useEffect } from "react";
import { useGlobalContext } from "../context";

const Modal = () => {
  const { modalContent, closeModal } = useGlobalContext();
  useEffect(() => {
    let timeout = setTimeout(() => {
      closeModal();
    }, 4000);
    return () => {
      clearTimeout(timeout);
    };
  }, [closeModal]); // eslint-disable-next-line
  return (
    <div className="tooltip animate-tooltip">
      <span>{modalContent}</span>
    </div>
  );
};

export default Modal;
