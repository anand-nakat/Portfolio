import React, { useState } from "react";
import Switch from "react-switch";
import { HiOutlineSun as HiSun, HiOutlineMoon as HiMoon } from "react-icons/hi";

const ThemeSwitch = () => {
  let mode = true;
  if (sessionStorage.getItem("Mode")) {
    mode = sessionStorage.getItem("Mode") === `Dark` ? false : true;
  }

  let html = document.querySelector("html");
  if (mode === false) {
    html.classList.add("dark");
  }
  const [checked, setChecked] = useState(mode);
  const toggleDarkMode = () => {
    if (checked) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    setChecked(!checked);
    sessionStorage.setItem("Mode", checked ? `Dark` : `Light`);
  };
  return (
    <div
      className="absolute dark:text-gray-50 flex items-center md:top-16 
    right-2 space-x-0.5 text-gray-800 text-2xl top-1.5"
    >
      <HiMoon
        className={`${
          !checked ? "text-yellow-600 scale-110 dark:text-yellow-400" : null
        } cursor-pointer hover:text-yellow-500 dark:hover:text-yellow-300 hover:scale-110 transform transition-all`}
        onClick={() => {
          setChecked(false);
          toggleDarkMode();
        }}
      />

      <Switch
        checked={checked}
        onChange={toggleDarkMode}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={15}
        width={48}
        onColor={`#0d2467`}
        offColor={`#e2bb57`}
        handleDiameter={20}
      />

      <HiSun
        className={`${
          !checked ? null : "text-yellow-600 scale-110 dark:text-yellow-400"
        } cursor-pointer hover:text-yellow-500 dark:hover:text-yellow-300 hover:scale-110 transform transition-all`}
        onClick={() => {
          setChecked(true);
          toggleDarkMode();
        }}
      />
    </div>
  );
};

export default ThemeSwitch;
