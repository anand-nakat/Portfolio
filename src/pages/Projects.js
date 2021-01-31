import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { projects } from "../utilities/projects";
import Modal from "../components/Modal";
import { useGlobalContext } from "../context";
const Projects = () => {
  const {
    isModalOpen,
    openModal,
    setModalText,
    increaseModalCount,
    modalAppearCount,
  } = useGlobalContext();

  useEffect(() => {
    if (modalAppearCount < 2) {
      setModalText("Click on Card to view Project");
      openModal();
      increaseModalCount();
    }
    // eslint-disable-next-line
  }, []);
  return (
    <main className="grid-container">
      <Sidebar />
      {isModalOpen && <Modal />}
      <div className="page-container">
        <div className="page-heading">My Work</div>
        <section className=" gap-5 grid grid-cols-1 lg:grid-cols-2 2xl:gap-10 pt-10">
          {projects.map((project, index) => {
            const { title, image, description, stack, link } = project;
            return (
              <a href={link} rel="noreferrer" target="_blank" key={index}>
                <article className="card  max-w-lg p-0 mx-auto transform hover:scale-105 hover:-translate-y-2 transition-all">
                  <div className="border-b-4 border-blue-700 dark:border-yellow-400">
                    <img src={image} alt={title} className="h-full w-full" />{" "}
                  </div>
                  <div className=" mt-3 pb-4 px-3">
                    <div className="card-header">{title}</div>
                    <p className="text-sm xl:text-lg font-raleway">
                      {description}
                    </p>
                    <div className="mt-3 flex-centered justify-start space-x-4">
                      <p className="text-lg xl:text-xl">Tags:</p>
                      <div
                        className={`flex  space-x-1 space-y-1.5 text-center ${
                          stack.length > 3 ? "flex-wrap" : null
                        }`}
                      >
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
              </a>
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default Projects;
