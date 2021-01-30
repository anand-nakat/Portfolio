import React, { useState, useCallback, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [modalContent, setModalContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  });

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
        isLoading,
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
