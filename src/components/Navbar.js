import React, { useEffect, useRef } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useGlobalContext } from "../context";

import { dateObject } from "../utilities/Day-Months";

const Navbar = () => {
  const { currentDate, currentDay, currentMonth, currentYear } = dateObject;
  const { changeNavbarHeight, isSidebarOpen, openSidebar } = useGlobalContext();
  const navbar = useRef(null);

  useEffect(() => {
    const height = navbar.current.getBoundingClientRect().height;

    changeNavbarHeight(height);
  }, []);
  return (
    <nav ref={navbar} className="navbar">
      {!isSidebarOpen && (
        <AiOutlineMenuUnfold
          className=" sidebar-open-btn"
          onClick={(e) => {
            console.log(e.target.classList);
            e.target.classList.remove("animate-pulse");
            openSidebar();
          }}
        />
      )}

      <h1 className="">Anand Nakat</h1>

      <p className="font-normal ml-auto text-lg tracking-tight hidden md:inline-block">
        {`${currentDay}, ${currentDate} ${currentMonth} ${currentYear}`}
      </p>
    </nav>
  );
};

export default Navbar;
