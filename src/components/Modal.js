import React, { useEffect } from "react";
import { useGlobalContext } from "../context";

const Modal = () => {
  const { modalContent, closeModal } = useGlobalContext();
  useEffect(() => {
    let timeout = setTimeout(() => {
      closeModal();
    }, 5900);
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line
  }, [closeModal]);
  return (
    <div
      className="animate-tooltip bg-indigo-300 dark:bg-indigo-300 dark:text-indigo-800 fixed font-raleway font-semibold left-1/2 p-2 px-10 rounded-lg sm:max-w-max text-center text-indigo-800 text-2xl z-30
    "
    >
      <span>{modalContent}</span>
    </div>
  );
};

export default Modal;
