import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import SingleProject from "../components/SingleProject";
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
  const [activeTag, setActiveTag] = useState("All");

  const filterProject = (tag) => {
    setActiveTag(tag);
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
                className={
                  tag === activeTag
                    ? `tag border-2 border-blue-800  dark:border-white`
                    : `tag`
                }
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
            return <SingleProject project={project} key={index} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default Projects;
