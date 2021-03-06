import React, { useState, useCallback, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalAppearCount, setModalAppearCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  });

  const increaseModalCount = () => {
    setModalAppearCount((oldCount) => oldCount + 1);
  };
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
        increaseModalCount,
        modalAppearCount,
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
