import React from "react";
import { ReactComponent as UploadIcon } from "../../assets/icons/files/Document-Upload-2.svg"; 

const ResumeUploadCard = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg max-w-[410px] mx-auto">
      <p className=" h4 font-roboto font-semibold mb-4 gap-2">Resume</p>
      <div className="flex flex-wrap items-center justify-between mb-4">
        <button className="mr-1 flex items-center border text-primary-300 px-4 py-2 rounded-lg">
          <UploadIcon className="w-6 h-6 fill-current mr-2" />
          Upload Resume
        </button>
        <p className="pt-1 font-roboto text-sm font-normal text-grayMedium">
          Supported Format: PDF, TXT
        </p>
      </div>
    </div>
  );
};

export default ResumeUploadCard;
