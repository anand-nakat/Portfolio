import React from "react";
import Sidebar from "../components/Sidebar";
import { educationDetails } from "../utilities/education-details";
import SingleQuestion from "../components/EducationCard";

const Education = () => {
  return (
    <main className="grid-container">
      <Sidebar />
      <div className="page-container">
        <div className="page-heading">Education</div>
        <section className="min-w-full">
          {educationDetails.map((item, index) => {
            const { title, info } = item;
            return (
              <SingleQuestion
                key={index}
                title={title}
                info={info}
                index={index}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default Education;
