import React, { useEffect } from "react";
import { useGlobalContext } from "../context";

const Modal = () => {
  const { modalContent, closeModal } = useGlobalContext();
  useEffect(() => {
    let timeout = setTimeout(() => {
      closeModal();
    }, 5800);
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line
  }, [closeModal]);
  return (
    <div
      className="animate-tooltip bg-blue-300 dark:bg-blue-300 dark:text-blue-800 fixed font-raleway font-semibold left-1/2 p-2 px-10 rounded-lg sm:w-max w-64 text-center text-blue-800 text-xl z-30
    "
    >
      <span>{modalContent}</span>
    </div>
  );
};

export default Modal;
