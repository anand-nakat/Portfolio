import React from "react";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <main className="-translate-x-1/2 -translate-y-1/2 fixed grid left-1/2 place-items-center text-2xl px-3 text-center text-gray-800 dark:text-gray-200 top-1/2 transform w-full space-y-4">
      <h1 className="font-black text-6xl lg:text-8xl">404 Error</h1>
      <p>Sorry, but the page you were looking for could not be found!</p>
      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-500 transition-colors font-black mt-4 p-2 px-8 rounded-md text-blue-50 text-lg uppercase"
      >
        Back To Home
      </Link>
    </main>
  );
};

export default ErrorPage;
