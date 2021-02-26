import React from "react";
import Sidebar from "../components/Sidebar";
import { skills } from "../utilities/skills";
const Skills = () => {
  return (
    <main className="grid-container">
      <Sidebar />
      <div className="page-container">
        <div className="page-heading">Skills</div>
        <section className="min-w-full">
          {skills.map((skill) => {
            const { id, title, list } = skill;
            return (
              <div className="card" key={id}>
                <h2 className="card-header">{title}</h2>
                <div className="font-normal font-raleway gap-y-5 grid grid-cols-2 justify-items-center mt-4 sm:grid-cols-3">
                  {list.map((item) => {
                    const { id, icon, title } = item;
                    return (
                      <div
                        className="w-max dark:hover:text-yellow-400 flex-centered flex-col hover:-translate-y-2 hover:scale-105 hover:text-blue-950 
                        lg:text-xl space-y-2 text-lg transform transition-all"
                        key={id}
                      >
                        {/* <div> */}
                        <div
                          className={`text-blue-700 dark:text-yellow-300 text-3xl lg:text-4xl`}
                        >
                          {icon}
                        </div>

                        <div className="dark:text-gray-200 text-gray-600">
                          {title}
                        </div>
                      </div>
                      // </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default Skills;
