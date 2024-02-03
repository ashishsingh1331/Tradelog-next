import { ChevronRightIcon } from "lucide-react";
import React from "react";

const TableContents = () => {
  return (
    <div className="table border w-full p-3 rounded-xl">
      <h3 className="text-lg font-semibold text-gray-800 my-3">
        Table of contents
      </h3>
      <div className="">
        <a
          href="#description"
          className="block py-2 px-4 rounded-lg text-gray-500 hover:bg-gray-100"
        >
          Description of the Project
        </a>
      </div>
      <div className="">
        <a
          href="#inspiration"
          className="block py-2 px-4 rounded-lg text-gray-500 hover:bg-gray-100"
        >
          Inspiration:
        </a>
        <div className="ms-5">
          <a
            href="#workflow"
            className="flex items-center py-2 px-4 rounded-lg text-gray-500 hover:bg-gray-100"
          >
            <ChevronRightIcon className="h-4 w-4 text-gray-500" />
            Application Workflow:
          </a>
        </div>
      </div>
      <div className="">
        <a
          href="#howitwork"
          className="block py-2 px-4 rounded-lg text-gray-500 hover:bg-gray-100"
        >
          How does it works?
        </a>
      </div>
      <div className="">
        <a
          href="#features"
          className="block py-2 px-4 rounded-lg text-gray-500 hover:bg-gray-100"
        >
          Features
        </a>
      </div>
      <div className="">
        <a
          href="#routes"
          className="block py-2 px-4 rounded-lg text-gray-500 hover:bg-gray-100"
        >
          Routes and their description
        </a>
        <div className="ms-5">
          <a
            href="#techstack"
            className="flex items-center py-2 px-4 rounded-lg text-gray-500 hover:bg-gray-100"
          >
            <ChevronRightIcon className="h-4 w-4 text-gray-500" />
            Tech Stack:
          </a>
        </div>
        <div className="">
          <a
            href="#libraries"
            className="block py-2 px-4 rounded-lg text-gray-500 hover:bg-gray-100"
          >
            Libraries
          </a>
        </div>
        <div className="">
          <a
            href="#deployment"
            className="block py-2 px-4 rounded-lg text-gray-500 hover:bg-gray-100"
          >
            Deployment
          </a>
        </div>
      </div>
    </div>
  );
};

export default TableContents;
