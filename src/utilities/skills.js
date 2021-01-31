import React from "react";
import { FaPython, FaBootstrap, FaReact, FaGitSquare } from "react-icons/fa";
import { DiJavascript, DiCss3 } from "react-icons/di";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { SiPhp } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiTailwindcss, SiJquery, SiJava } from "react-icons/si";
export const skills = [
  {
    id: 1,
    title: "languages",
    color: "blue",
    list: [
      {
        id: 1,
        title: "Java",
        icon: <SiJava />,
      },
      {
        id: 2,
        title: "HTML",
        icon: <AiFillHtml5 />,
      },
      {
        id: 3,
        title: "CSS",
        icon: <DiCss3 />,
      },
      {
        id: 4,
        title: "Javascript",
        icon: <DiJavascript />,
      },
      {
        id: 5,
        title: "Python",
        icon: <FaPython />,
      },
      {
        id: 6,
        title: "PHP",
        icon: <SiPhp />,
      },
    ],
  },
  {
    id: 2,
    title: "Libraries/ Frameworks",
    color: "blue",
    list: [
      {
        id: 1,
        title: "React ",
        icon: <FaReact />,
      },
      {
        id: 2,
        title: "JQuery",
        icon: <SiJquery />,
      },
      {
        id: 3,
        title: "Tailwind CSS",
        icon: <SiTailwindcss />,
      },
      {
        id: 4,
        title: "Bootstrap",
        icon: <FaBootstrap />,
      },
    ],
  },
  {
    id: 3,
    title: "Databases",
    color: "blue",
    list: [
      {
        id: 1,
        title: "MySQL",
        icon: <GrMysql />,
      },
    ],
  },
  {
    id: 4,
    title: "Tools",
    color: "blue",
    list: [
      {
        id: 1,
        title: "Git",
        icon: <FaGitSquare />,
      },
      {
        id: 2,
        title: "Github",
        icon: <AiFillGithub />,
      },
    ],
  },
];
