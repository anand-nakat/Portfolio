import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
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
    link: "https://www.facebook.com/profile.php?id=100008843023697",
    title: "Facebook",
    icon: <FaFacebook />,
  },
  {
    id: 4,
    link: "mailto:nakatanand2000@gmail.com",
    title: "Gmail",
    icon: <SiGmail />,
  },
];
