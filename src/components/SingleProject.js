import React, { useState } from "react";

const SingleProject = ({
  project: { title, image, description, stack, link },
}) => {
  const [showMoreText, setShowMoreText] = useState(true);

  return (
    <article className="card  max-w-lg p-0 mx-auto cursor-auto">
      <div className="border-b-4 border-blue-700 dark:border-yellow-400">
        <img src={image} alt={title} className="h-full w-full" />{" "}
      </div>
      <div className=" mt-3 pb-4 px-3">
        <div className="card-header text-xl">
          <div>{title}</div>
          {link && (  // Check if link is not empty
            <a
              href={link}
              rel="noreferrer"
              target="_blank"
              className="border-indigo-700 flex-shrink-0 text-center font-black border-2 dark:border-yellow-300 dark:hover:bg-yellow-300 dark:hover:text-black text-indigo-700 dark:text-yellow-50 hover:bg-indigo-600 hover:text-indigo-50 transition-colors uppercase py-0.5 px-1.5 rounded-md text-sm focus:outline-none"
            >
              Live Link
            </a>
          )}
        </div>
        <p className="text-lg font-raleway text-gray-600 dark:text-gray-300">
          {showMoreText ? description.substring(0, 200) + "...." : description}

          <button
            className="focus:outline-none  p-1  text-blue-600 dark:text-yellow-300 ml-2 "
            onClick={() => setShowMoreText(!showMoreText)}
          >
            {showMoreText ? "Read More" : "Read Less"}
          </button>
        </p>
        <div className="mt-3 flex-centered justify-start space-x-4 text-gray-700 dark:text-gray-200">
          <div className={`flex  space-x-1.5 flex-wrap text-center `}>
            {stack.map((item) => {
              return (
                <span key={item.id} className="tag  mt-1">
                  {item.title}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
};

export default SingleProject;
