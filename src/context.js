import React, { useState, useEffect, useCallback, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
