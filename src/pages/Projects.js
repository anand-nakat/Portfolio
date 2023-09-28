import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import SingleProject from "../components/SingleProject";
import { projects } from "../utilities/projects";

const tags = [
  "All",
  "SDE",
  "Web Dev",
  "ML",
  "DL",
  "NLP",
];

const Projects = () => {
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
      <div className="page-container">
        <div className="page-heading">Projects</div>
        <div>Filter Projects by Topics</div>
        <div className="flex  flex-col lg:flex-row  items-center space-x-1.5 ">
          <div className="flex items-center flex-wrap space-x-1 space-y-1 lg:space-y-0">
            {tags.map((tag, index) => {
              return (
                <span
                  className={
                    tag === activeTag
                      ? `tag  bg-blue-500 text-blue-50 dark:bg-yellow-500 dark:text-yellow-50  text-base`
                      : `tag text-base hover:bg-blue-500 hover:text-blue-50 dark:hover:bg-yellow-500 dark:hover:text-yellow-50 `
                  }
                  key={index}
                  onClick={() => filterProject(tag)}
                >
                  {tag}
                </span>
              );
            })}
          </div>
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
