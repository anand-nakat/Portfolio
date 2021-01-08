import React, { useEffect } from "react";
import { useGlobalContext } from "../context";

const Modal = () => {
  const { modalContent, closeModal } = useGlobalContext();
  useEffect(() => {
    let timeout = setTimeout(() => {
      closeModal();
    }, 3900);
    return () => {
      clearTimeout(timeout);
    };
  }, [closeModal]); // eslint-disable-next-line
  return (
    <div
      className="animate-tooltip  transform -translate-x-1/2 bg-indigo-300 bottom-4 dark:bg-indigo-300 dark:text-indigo-800 
      fixed font-raleway font-semibold left-1/2 p-2 px-3 rounded-lg sm:max-w-max text-center text-indigo-800 text-lg  z-30
    "
    >
      <span>{modalContent}</span>
    </div>
  );
};

export default Modal;
