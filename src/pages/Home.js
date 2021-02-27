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
          <section className="grid gap-3 md:grid-cols-2 items-center ">
            <div className="self-start">
              <img src={myself} alt="myself" className="my-image" />
            </div>
            <div className="max-w-2xl text-lg xl:text-2xl text-gray-600 dark:text-gray-300">
              <span className="pl-14"> Hi there, I'm Anand.</span> I am
              currently pursuing Bachelor's Degree in Information Technology, at
              DY Patil College of Engineering, Pune. Currently I'm exploring the
              world of React JS along with Tailwind CSS and try to build
              something out of it. <br />
              <span className="pl-14"></span>I aspire to be a Full Stack
              Developer. I am a curious, determined person currently exploring
              myself as a Web Developer. <br />
              You can access more details through the Sidebar Menu.
            </div>
          </section>
        </div>
        {isModalOpen && <Modal />}
      </main>
    </>
  );
};

export default Home;
