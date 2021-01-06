import React from "react";

import { AiFillMinusCircle } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";

const EducationSingleQuestion = ({ title, info, index }) => {
  const [showDropdown, setShowDropdown] = React.useState(false);

  return (
    <div
      className={`bg-gray-50 my-2 dark:bg-gray-900 dark:text-gray-100 p-2 px-4 rounded-lg
    shadow-lg text-gray-800  transform transition-transform cursor-pointer ${
      showDropdown ? null : "hover:scale-105"
    }`}
      onClick={() => {
        if (!showDropdown) {
          setShowDropdown(!showDropdown);
        }
      }}
    >
      <h2 className="flex-centered text-lg font-black font-raleway justify-between leading-relaxed mb-1.5 tracking-wide uppercase">
        {title}{" "}
        <span
          className="dark:text-yellow-300 text-2xl text-blue-800 hover:text-blue-700 dark:hover:text-yellow-400 
              transition-all cursor-pointer transform hover:rotate-180"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {showDropdown ? <AiFillMinusCircle /> : <BsFillPlusCircleFill />}
        </span>
      </h2>
      {showDropdown && (
        <div className="font-extralight font-sans text-lg">
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
