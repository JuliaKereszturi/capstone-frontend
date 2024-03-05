import React from "react";
import { ReactComponent as AddSvg } from "../../assets/icons/essential/add.svg";
import { ReactComponent as EditSquare } from "../../assets/icons/files/Edit-Square.svg";
const Education = () => {
  return (
    <div
      className="bg-white shadow-custom p-4 border border-gray-200 rounded-lg shadow-md max-w-sm"
      // className="border rounded-lg border-gray-200 shadow-custom"
      style={{
        padding: "30px 20px",
        borderRadius: "20px",
        boxShadow: "4px 5px 20px 4px #95989E14",
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Education</h2>
        <EditSquare className=" min-w-6 min-h-6 w-6 h-6 fill-current text-primary-600" />
      </div>
      <div className="mb-2">
        <h3 className="text-md font-medium text-primary-400 font-semibold">
          BSc in Information Technology
        </h3>
        <p className="text-sm text-grayish">
          Chinhoyi University of Technology
        </p>
        <p className="text-sm text-grayish">2021</p>
      </div>

      <button className="flex items-center justify-center bg-white text-primary-400 border border-primary-400 font-roboto py-2 px-4 rounded hover:bg-primary-500 hover:border-primary-500 hover:text-white transition ease-in duration-200">
        <AddSvg />
        Add Education
      </button>
    </div>
  );
};

export default Education;
