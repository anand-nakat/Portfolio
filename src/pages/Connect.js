import React from "react";
import Sidebar from "../components/Sidebar";
import { socialIcons } from "../utilities/social-links";
const Connect = () => {
  return (
    <main className="grid-container">
      <Sidebar />
      <div className="page-container">
        <div className="page-heading">Let's Connect</div>
        <section className="max-w-lg">
          <p className="font-raleway font-semibold px-8 py-1 text-xl xl:text-2xl">
            Enough about me I suppose :) <br />
            Let's have a two way converstaion. <br />
            You can reach me out at:
          </p>

          <ul className="  text-blue-950 dark:text-yellow-300 flex  items-center justify-evenly  text-2xl lg:text-3xl mt-6  xl:text-4xl">
            {socialIcons.map((item) => (
              <li
                key={item.id}
                className="transform transition-all hover:scale-105 hover:-translate-y-2 dark:hover:text-yellow-400 hover:text-blue-900"
              >
                <a href={item.link} rel="noreferrer" target="_blank">
                  {item.icon}
                </a>{" "}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Connect;