import React from "react";

import { FiFastForward } from "react-icons/fi";
import { AiOutlineFire } from "react-icons/ai";
import { GiStrong, GiCricketBat } from "react-icons/gi";
import { MdWeb } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { RiMovieLine } from "react-icons/ri";
import { MdSyncProblem } from "react-icons/md";

export const more = [
  {
    id: 1,
    title: "Non Technical ",
    color: "blue",
    list: [
      {
        id: 1,
        title: "Quick Learner",
        icon: <FiFastForward />,
      },
      {
        id: 2,
        title: "Persevering ",
        icon: <AiOutlineFire />,
      },
      {
        id: 3,
        title: "Problem Solving ",
        icon: <MdSyncProblem />,
      },
      {
        id: 4,
        title: "Determined",
        icon: <GiStrong />,
      },
    ],
  },
  {
    id: 2,
    title: "Hobbies",
    color: "blue",
    list: [
      {
        id: 1,
        title: "Creating Websites",
        icon: <MdWeb />,
      },
      {
        id: 2,
        title: "Playing Cricket",
        icon: <GiCricketBat />,
      },
      {
        id: 3,
        title: "Coding",
        icon: <FaLaptopCode />,
      },
      {
        id: 4,
        title: "Binge Watching",
        icon: <RiMovieLine />,
      },
    ],
  },
];
