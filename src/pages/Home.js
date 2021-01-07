import React from "react";
import Sidebar from "../components/Sidebar";
import myself from "../images/myself.jpg";
const Home = () => {
  return (
    <main className="grid-container">
      <Sidebar />
      <div className="lg:space-y-4 page-container space-y-8">
        <div className="page-heading">Home</div>

        <div>
          <img src={myself} alt="myself" className="my-image" />
        </div>
        <div className="font-raleway max-w-2xl text-xl xl:text-2xl">
          <span className="pl-14"> Hi there, I'm Anand.</span> I am currently
          pursuing Bachelor's Degree in Information Technology, at DY Patil
          College of Engineering, Pune. <br />
          Currently I'm exploring the world of React JS along with Tailwind CSS
          and try to build something out of it. <br />
          <span className="pl-14"></span>I aspire to be a Full Stack Developer.
          I am a curious, determined person currently exploring myself as a Web
          Developer. <br />
          You can access more details through the Sidebar Menu.
        </div>
      </div>
    </main>
  );
};

export default Home;
