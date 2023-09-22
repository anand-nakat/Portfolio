import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const socialIcons = [
  {
    id: 1,
    link: "https://github.com/anand-nakat",
    title: "Github",
    icon: <FaGithub />,
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/anand-nakat",
    title: "Linkedin",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    link: "mailto:nakatanand2000@gmail.com",
    title: "Gmail",
    icon: <SiGmail />,
  },
  {
    id: 4,
    link: "https://www.instagram.com/anand_nakat/",
    title: "Instagram",
    icon: <FaInstagram />
  },

];
