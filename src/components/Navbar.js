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
    <nav
      ref={navbar}
      className=" fixed top-0   bg-gray-50
       text-gray-850 dark:text-gray-100 border-b dark:border-white flex-centered font-semibold 
      p-3  text-2xl dark:bg-gray-850  w-full z-20 lg:text-3xl xl:text-4xl shadow-md"
    >
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
        <h1 className="hover:text-white">Anand Nakat</h1>
      </Link>

      <p className="font-normal ml-auto text-lg tracking-tight hidden md:inline-block">
        {`${currentDay}, ${currentDate} ${currentMonth} ${currentYear}`}
      </p>
    </nav>
  );
};

export default Navbar;
