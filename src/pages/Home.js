import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import myself from "../images/myself.jpg";
import Modal from "../components/Modal";
import { dateObject } from "../utilities/Day-Months";
import { useGlobalContext } from "../context";
const Home = () => {
  const { currentTime } = dateObject;
  const {
    isModalOpen,
    setModalText,
    increaseModalCount,
    modalAppearCount,
    openModal,
  } = useGlobalContext();
  let tooltipContent = "";
  if (currentTime > 5 && currentTime < 12) {
    tooltipContent = "Good Morning!";
  } else if (currentTime >= 12 && currentTime < 16) {
    tooltipContent = "Good Afternoon!";
  } else if (currentTime < 19) {
    tooltipContent = "Good Evening!";
  } else {
    tooltipContent = "Good Night!";
  }
  useEffect(() => {
    if (modalAppearCount < 1) {
      setModalText(tooltipContent);
      openModal();
      increaseModalCount();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <main className="grid-container">
        <Sidebar />

        <div className="lg:space-y-14 page-container space-y-8">
          <div className="page-heading">Home</div>
          <section className="grid gap-6 lg:grid-cols-2 items-start ">
            <div className="self-start">
              <img src={myself} alt="myself" className="my-image" />
            </div>
            <div className="max-w-2xl text-lg xl:text-xl text-gray-600 dark:text-gray-300">
              <span className="pl-14"></span> Hello! I am Anand Nakat. I am currently pursuing my
              Master's Degree at IISc Bengaluru from CSA Department. I am working in Game Theory Lab,
              under Prof. Y. Narahari on the "Crop Price Prediction" project. <br />
              <span className="pl-14"></span>About by educational background, I appeared for GATE CS 2022
              and achieved <bold> AIR 49 </bold> among 77,257 students
              in my 1st attempt. I have completed BE in IT from Pune University in 2022.
              I have been a web developer in the past during my BE, majorly front
              end web designing.<br />
              <span className="pl-14"></span>Having gone through courses from all subject pools at IISc, I have developed keen interset in the field
              of Intelligent Systems, NLP in particular. Hence prefereably looking for job opportunities
              in the same field.
            </div>
          </section>
        </div>
        {isModalOpen && <Modal />}
      </main>
    </>
  );
};

export default Home;
