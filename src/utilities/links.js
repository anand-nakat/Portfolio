import React from "react";
import { AiFillHome, AiOutlineLink } from "react-icons/ai";
import { IoSchoolSharp } from "react-icons/io5";
import { GoProject } from "react-icons/go";
import { FaInfoCircle, FaStar } from "react-icons/fa";
import { MdMore } from "react-icons/md";

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
    title: "Skills",
    link: "/skills",
    icon: <FaStar />,
  },
  {
    id: 4,
    title: "My Work",
    link: "/projects",
    icon: <GoProject />,
  },
  {
    id: 5,
    title: "More",
    link: "/more",
    icon: <MdMore />,
  },
  {
    id: 6,
    title: "Connect",
    link: "/connect",
    icon: <AiOutlineLink />,
  },
];
