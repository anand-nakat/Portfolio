import React from "react";
import { FaPython, FaReact, FaGitSquare } from "react-icons/fa";
import { DiJavascript, DiCss3 } from "react-icons/di";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { GrMysql } from "react-icons/gr";
import { VscTools } from "react-icons/vsc";
import {
  SiTailwindcss,
  SiCplusplus,
  SiJupyter,
  SiPytorch,
  SiOverleaf,
  SiScikitlearn
} from "react-icons/si";

export const skills = [
  {
    id: 1,
    title: "languages",
    color: "blue",
    list: [
      {
        id: 1,
        title: "C/C++",
        icon: <SiCplusplus />,
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
        title: "SQL",
        icon: <GrMysql />,
      },
    ],
  },
  {
    id: 2,
    title: "Tools/ Libraries",
    color: "blue",
    list: [
      {
        id: 4,
        title: "PyTorch",
        icon: <SiPytorch />,
      },
      {
        id: 6,
        title: "Scikit-learn",
        icon: <SiScikitlearn />,
      },

      {
        id: 1,
        title: "React ",
        icon: <FaReact />,
      },
      {
        id: 3,
        title: "Tailwind CSS",
        icon: <SiTailwindcss />,
      },

      {
        id: 5,
        title: "GIT",
        icon: <FaGitSquare />,
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
        title: "Jupyter Notebook",
        icon: <SiJupyter />,
      },
      {
        id: 2,
        title: "Github",
        icon: <AiFillGithub />,
      },
      {
        id: 3,
        title: "VS Code",
        icon: <VscTools />,
      },
      {
        id: 4,
        title: "LATEX",
        icon: <SiOverleaf />,
      },
    ],
  },
];
