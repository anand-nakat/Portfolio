import React from "react";

import { AiFillMinusCircle } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";

const EducationCard = ({ title, info, index }) => {
  const [showDropdown, setShowDropdown] = React.useState(true);

  return (
    <div
      className={`card`}
      onClick={() => {
        setShowDropdown(!showDropdown);
      }}
    >
      <h2 className="card-header">
        {title}{" "}
        <span
          className="card-toggle-btn"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {showDropdown ? <AiFillMinusCircle /> : <BsFillPlusCircleFill />}
        </span>
      </h2>
      {showDropdown && (
        <div className=" lg:text-xl text-lg text-gray-500 dark:text-gray-300">
          <ul>
            {info.map((item, index) => {
              const {
                pointer,
                percentage,
                completionYear,
                graduationYear,
                institute,
              } = item;
              return (
                <li key={index}>
                  <p>
                    {pointer
                      ? `GPA: ${pointer}/10`
                      : `Percentage: ${percentage}`}
                  </p>
                  <p> {`Institute: ${institute}`}</p>
                  <p>
                    {completionYear
                      ? `Completion Year: ${completionYear}`
                      : `Graduation Year: ${graduationYear}`}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EducationCard;
