import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { projects } from "../utilities/projects";
import Modal from "../components/Modal";
import { useGlobalContext } from "../context";

const tags = [
  "All",
  "React",
  "Javascript",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "PHP",
  "MySQL",
];

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
  const [projectList, setProjectList] = useState(projects);

  const filterProject = (tag) => {
    if (tag === "All") {
      setProjectList(projects);
    } else {
      let tempProjects = projects.filter((project) => {
        const { stack } = project;
        if (
          stack.find((item) => item.title.toLowerCase() === tag.toLowerCase())
        ) {
          return project;
        } else {
          return null;
        }
      });
      setProjectList(tempProjects);
    }
  };
  return (
    <main className="grid-container">
      <Sidebar />
      {isModalOpen && <Modal />}
      <div className="page-container">
        <div className="page-heading">My Work</div>
        <div className="flex flex-wrap justify-center items-center space-x-1.5 space-y-1">
          <p>Filter By:</p>
          {tags.map((tag, index) => {
            return (
              <span
                className="tag"
                key={index}
                onClick={() => filterProject(tag)}
              >
                {tag}
              </span>
            );
          })}
        </div>
        <section className=" gap-5 grid grid-cols-1 lg:grid-cols-2 2xl:gap-10 pt-10">
          {projectList.map((project, index) => {
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
                            <span key={item.id} className="tag">
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
