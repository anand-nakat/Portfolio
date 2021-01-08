import React, { useState, useCallback, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [modalContent, setModalContent] = useState("");
  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const setModalText = useCallback((text) => {
    setModalContent(text);
  }, []);

  const changeNavbarHeight = useCallback((height) => {
    setNavbarHeight(height);
  }, []);
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
