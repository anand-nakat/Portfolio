import React, { useRef, useEffect } from "react";
import { links } from "../utilities/links";
import { Link } from "react-router-dom";
import { AiOutlineMenuFold } from "react-icons/ai";
import { useGlobalContext } from "../context";

import { dateObject } from "../utilities/Day-Months";
const Sidebar = () => {
  const { currentDate, currentDay, currentMonth } = dateObject;
  const { navbarHeight, isSidebarOpen, setIsSidebarOpen } = useGlobalContext();
  const pathname = window.location.pathname;

  const aside = useRef(null);
  const closeSidebar = () => {
    aside.current.classList.remove("left-0");
    aside.current.classList.add("-left-full");
    setIsSidebarOpen(false);
  };

  function handleClick(e) {
    if (!e.target.classList.contains("sidebar")) {
      closeSidebar();
    }
  }

  useEffect(() => {
    aside.current.style.top = `${navbarHeight + 0.5}px`;
  }, [navbarHeight]);
  return (
    <>
      <div
        className={`overlay min-h-screen min-w-full bg-black fixed top-0 left-0 opacity-90 md:hidden z-10 
        ${isSidebarOpen ? null : `hidden`}`}
        onClick={(e) => handleClick(e)}
      ></div>
      <aside
        ref={aside}
        className={` sidebar
      ${isSidebarOpen ? "left-0" : `-left-full`}`}
      >
        <div className="menu-heading">
          <h1>{`${currentDay}, ${currentDate} ${currentMonth} `} </h1>
          <AiOutlineMenuFold
            onClick={() => closeSidebar()}
            className="submenu-close-btn"
          />
        </div>
        <div className="h-5/6 mt-3 ">
          <ul className="flex flex-col h-full items-start justify-evenly md:fixed ">
            {links.map((item) => {
              const { id, link, icon, title } = item;
              return (
                <li
                  key={id}
                  className={`menu-item
                ${
                  pathname === link
                    ? "dark:bg-blue-500 bg-yellow-600 scale-105"
                    : "hover:text-white hover:translate-y-2"
                }
                `}
                >
                  <Link
                    to={link}
                    className="flex-centered justify-start md:space-x-1 pl-1 px-30 space-x-1.5"
                  >
                    <span>{icon}</span>
                    <p>{title}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
