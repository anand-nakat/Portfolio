import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { myself } from "../images/myself-2.jpeg";
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
              <span className="pl-14"> Hi there, I'm Anand.</span> Hello, I'm
              Anand. I have completed my graduation in Information Technology
              from Pune University, 2022. Currently I am pursuing MTech in
              Computer Science and Automation at IISc Bangalore. Having studied
              subjects from different pools in Computer Science at IISc, I've
              become more oriented towards Intelligent Systems. <br />
              <span className="pl-14"></span> Henceforth, I am learning
              algorithms in machine learning and the beautiful math behind it,
              and seeking for roles in the same field. Apart from the
              educational history, I have been a web developer, majorly front
              end web designing. I am tenacious, diligent and always strive to
              complete task I am put up to. <br />
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
