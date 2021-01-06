import React, { useRef, useEffect } from "react";
import { links } from "../utilities/links";
import { Link } from "react-router-dom";
import { AiOutlineMenuFold } from "react-icons/ai";
import { useGlobalContext } from "../context";

import { dateObject } from "../utilities/Day-Months";
const Sidebar = () => {
  const { currentDate, currentDay, currentMonth, currentYear } = dateObject;
  const { navbarHeight, isSidebarOpen, setIsSidebarOpen } = useGlobalContext();

  const aside = useRef(null);
  const closeSidebar = () => {
    aside.current.classList.remove("left-0");
    aside.current.classList.add("-left-full");
    setIsSidebarOpen(false);
  };
  useEffect(() => {
    aside.current.style.top = `${navbarHeight + 0.5}px`;
  }, [navbarHeight]);
  return (
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
        <ul className="flex flex-col h-full items-start justify-evenly text-lg">
          {links.map((item) => {
            const { id, link, icon, title } = item;
            return (
              <li key={id} className="menu-item">
                <Link
                  to={link}
                  className="pl-1 flex-centered justify-start space-x-1"
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
  );
};

export default Sidebar;
