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
        <div className="card-header">{title}</div>
        <p className="text-sm xl:text-lg font-raleway text-gray-600 dark:text-gray-300">
          {showMoreText ? description.substring(0, 200) + "...." : description}

          <button
            className="focus:outline-none  p-1 rounded text-lg font-black text-blue-700 dark:text-blue-300 ml-2 "
            onClick={() => setShowMoreText(!showMoreText)}
          >
            {showMoreText ? "Show More" : "Show Less"}
          </button>
        </p>
        <div className="mt-3 flex-centered justify-start space-x-4">
          <p className="text-lg xl:text-xl">Tags:</p>
          <div
            className={`flex  space-x-1 space-y-1.5 text-center ${
              stack.length > 3 ? "flex-wrap" : null
            }`}
          >
            {stack.map((item) => {
              return (
                <span key={item.id} className="tag">
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
