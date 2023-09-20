import React from "react";
import Sidebar from "../components/Sidebar";
import { socialIcons } from "../utilities/social-links";
const Connect = () => {
  return (
    <main className="grid-container">
      <Sidebar />
      <div className="page-container lg:-mt-5">
        <div className="page-heading">Let's Connect</div>
        <section className="max-w-lg">
          <p className="px-8 py-1 text-lg lg:text-xl xl:text-2xl mt-10 text-gray-600 dark:text-gray-300">
            Enough about me I suppose :) <br />
            Let's have a two way converstaion. <br />
            You can reach me out at: <span className="text-blue-500 dark:text-yellow-300"><a href="mailto:anandnakat@iisc.ac.in">anandnakat@iisc.ac.in</a> </span>

          </p>

          <ul className=" text-blue-800 dark:text-yellow-300 flex  items-center justify-evenly  text-2xl lg:text-3xl mt-6  xl:text-4xl">
            {socialIcons.map((item) => (
              <li
                key={item.id}
                className="transform transition-all hover:scale-105 hover:-translate-y-2 dark:hover:text-yellow-400 hover:text-blue-900"
              >
                <a
                  href={item.link}
                  rel="noreferrer"
                  target="_blank"
                  className="flex flex-col items-center space-y-1"
                >
                  {item.icon}
                  <p className="text-sm dark:text-gray-300 text-gray-600">
                    {item.title}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main >
  );
};

export default Connect;
