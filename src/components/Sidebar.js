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
        className={` fixed md:relative h-full text-lg lg:text-xl xl:text-2xl md:min-h-screen bg-blue-950 dark:bg-gray-850 dark:text-gray-50  md:left-0 
      p-2 rounded-r text-gray-50 top-0 transition-all w-52 xl:w-auto z-10 shadow-2xl border-r-2 border-yellow-500 dark:border-gray-700
      ${isSidebarOpen ? "left-0" : `-left-full`}`}
      >
        <div className="menu-heading">
          <h1>{`${currentDay}, ${currentDate} ${currentMonth} `} </h1>
          <AiOutlineMenuFold
            onClick={() => closeSidebar()}
            className="submenu-close-btn"
          />
        </div>
        <div className="h-5/6 mt-3 fixed">
          <ul className="flex flex-col h-full items-start justify-evenly ">
            {links.map((item) => {
              const { id, link, icon, title } = item;
              return (
                <li
                  key={id}
                  className={`transform transition-all
                ${
                  pathname === link
                    ? "text-yellow-400 dark:text-blue-300 scale-105 transform translate-x-1.5"
                    : "hover:text-yellow-400 dark: dark:hover:text-blue-300 hover:translate-y-2"
                }
                `}
                >
                  <Link
                    to={link}
                    className="flex-centered justify-start pl-2 space-x-2.5"
                    onClick={() => closeSidebar()}
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
