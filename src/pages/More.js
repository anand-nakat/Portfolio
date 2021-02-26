import React from "react";
import Sidebar from "../components/Sidebar";
import { more } from "../utilities/more";

const More = () => {
  console.log(more);
  return (
    <main className="grid-container">
      <Sidebar />
      <div className="lg:space-y-4 page-container space-y-8">
        <div className="page-heading">More About Me</div>
        <section className="min-w-full">
          {more.map((item) => {
            const { id, title, list } = item;
            return (
              <div className="card" key={id}>
                <h2 className="card-header">{title}</h2>
                <div className="font-normal font-raleway gap-y-5 grid grid-cols-2 justify-evenly mt-4 sm:grid-cols-3">
                  {list.map((item) => {
                    const { id, icon, title } = item;
                    return (
                      <div
                        className="dark:hover:text-yellow-400 flex-centered flex-col hover:-translate-y-2 hover:scale-105 hover:text-blue-950 
                        lg:text-xl space-y-2 text-lg transform transition-all"
                        key={id}
                      >
                        <div
                          className={` text-blue-700 dark:text-yellow-300 text-3xl lg:text-4xl `}
                        >
                          {icon}
                        </div>

                        <div className="text-center dark:text-gray-300 text-gray-600">
                          {title}
                        </div>
                      </div>
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

export default More;
