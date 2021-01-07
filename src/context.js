import React, { useState, useEffect, useCallback, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [modalContent, setModalContent] = useState("");
  function openModal() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }
  /*   useCallback(function setModalText(text) {
    setModalContent(text);
  }, []); */

  const setModalText = useCallback((text) => {
    setModalContent(text);
  }, []);

  function changeNavbarHeight(height) {
    setNavbarHeight(height);
  }
  function closeSidebar() {
    setIsSidebarOpen(false);
  }
  function openSidebar() {
    setIsSidebarOpen(true);
  }

  return (
    <AppContext.Provider
      value={{
        navbarHeight,
        changeNavbarHeight,
        closeSidebar,
        openSidebar,
        isSidebarOpen,
        setIsSidebarOpen,
        isModalOpen,
        modalContent,
        openModal,
        closeModal,
        setModalText,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
