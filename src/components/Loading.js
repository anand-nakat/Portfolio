import React from "react";
import loadingImg from "../images/TeAm.gif";

const Loading = () => {
  return (
    <div className="h-screen bg-black w-screen grid place-items-center">
      <img src={loadingImg} alt="Loading" />
    </div>
  );
};

export default Loading;
