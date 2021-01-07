import React from "react";
import Sidebar from "../components/Sidebar";
import { projects } from "../utilities/projects";

const Projects = () => {
  return (
    <main className="grid-container">
      <Sidebar />
      <div className="page-container">
        <div className="page-heading">My Work</div>
        <section className="grid grid-cols-1 2xl:grid-cols-3 gap-5  min-w-full sm:grid-cols-2">
          {projects.map((project, index) => {
            const { title, image, description, stack } = project;
            return (
              <article
                key={index}
                className="card  max-w-lg p-0 mx-auto transform hover:scale-105 hover:-translate-y-2 transition-all"
              >
                <div className="border-b-4 border-blue-700 dark:border-yellow-400">
                  <img src={image} alt={title} className="h-full w-full" />{" "}
                </div>
                <div className=" mt-3 pb-4 px-3">
                  <div className="card-header">{title}</div>
                  <p className="text-sm xl:text-lg font-raleway">
                    {description}
                  </p>
                  <div className="mt-3 flex-centered justify-start space-x-4">
                    <p className="text-lg xl:text-2xl">Technical Stack:</p>
                    <div className="flex flex-wrap space-x-1 space-y-1.5 text-center">
                      {stack.map((item) => {
                        return (
                          <span
                            key={item.id}
                            className="bg-blue-300 dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:text-yellow-900 
                  flex-centered font-light hover:bg-blue-400 px-2 py-1 rounded-lg text-blue-800 text-xs transition-colors 
                  w-max xl:text-sm"
                          >
                            {item.title}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default Projects;
