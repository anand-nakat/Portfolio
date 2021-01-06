import React from "react";
import Sidebar from "../components/Sidebar";
import myself from "../images/myself.jpg";
const Home = () => {
  return (
    <main className="grid-container">
      <Sidebar />
      <div className="page-container">
        <div className="page-heading">Home</div>

        <div>
          <img src={myself} alt="myself" className="my-image" />
        </div>
        <div className="font-medium font-raleway">
          Hi there, I'm currently pursuing Bachelor's Degree in Information
          Technology, at DY Patil College of Engineering. I'm a curious,
          determined person exploring myself as a Web Developer. I aspire to be
          a Full Stack (MERN) Developer. You can check further details below.
        </div>
      </div>
    </main>
  );
};

export default Home;
