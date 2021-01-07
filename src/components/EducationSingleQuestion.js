import React from "react";

import { AiFillMinusCircle } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";

const EducationSingleQuestion = ({ title, info, index }) => {
  const [showDropdown, setShowDropdown] = React.useState(false);

  return (
    <div
      className={`card ${showDropdown ? null : "hover:scale-105"}`}
      onClick={() => {
        if (!showDropdown) {
          setShowDropdown(!showDropdown);
        }
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
        <div className="font-extralight font-sans lg:text-xl text-lg">
          <ul>
            {info.map((item, index) => {
              const {
                pointer,
                percentage,
                board,
                university,
                completionYear,
                graduationYear,
                institute,
              } = item;
              return (
                <li key={index}>
                  <p>
                    {pointer
                      ? `Pointer: ${pointer}`
                      : `Percentage: ${percentage}`}
                  </p>
                  <p> {`Institute Name: ${institute}`}</p>
                  <p>
                    {board ? `Board: ${board}` : `University: ${university}`}
                  </p>
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

export default EducationSingleQuestion;
