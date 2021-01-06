import React from "react";
import { AiFillHome } from "react-icons/ai";
import { IoSchoolSharp } from "react-icons/io5";
import { GoProject } from "react-icons/go";
import { FaInfoCircle, FaStar } from "react-icons/fa";

export const links = [
  {
    id: 1,
    title: "Home",
    link: "/",
    icon: <AiFillHome />,
  },
  {
    id: 2,
    title: "Education",
    link: "/education",
    icon: <IoSchoolSharp />,
  },
  {
    id: 3,
    title: "Skills and Hobbies",
    link: "/skills",
    icon: <FaStar />,
  },
  {
    id: 4,
    title: "Projects",
    link: "/projects",
    icon: <GoProject />,
  },
  {
    id: 5,
    title: "About",
    link: "/about",
    icon: <FaInfoCircle />,
  },
];
