import React, { useEffect, useRef } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

import { dateObject } from "../utilities/Day-Months";

const Navbar = () => {
  const { currentDate, currentDay, currentMonth, currentYear } = dateObject;
  const { changeNavbarHeight, isSidebarOpen, openSidebar } = useGlobalContext();
  const navbar = useRef(null);

  const getNavbarHeight = () => {
    if (navbar.current) {
      const height = navbar.current.getBoundingClientRect().height;
      changeNavbarHeight(height);
    }
  };
  window.addEventListener("resize", getNavbarHeight);
  useEffect(() => {
    getNavbarHeight();
    // eslint-disable-next-line
  }, []);
  return (
    <nav ref={navbar} className=" navbar">
      {!isSidebarOpen && (
        <AiOutlineMenuUnfold
          className=" sidebar-open-btn"
          onClick={(e) => {
            e.target.classList.remove("animate-pulse");
            openSidebar();
          }}
        />
      )}
      <Link to="/">
        <h1 className="hover:text-black dark:hover:text-white">Anand Nakat</h1>
      </Link>

      <p className="font-normal ml-auto text-lg tracking-tight hidden md:inline-block">
        {`${currentDay}, ${currentDate} ${currentMonth} ${currentYear}`}
      </p>
    </nav>
  );
};

export default Navbar;
