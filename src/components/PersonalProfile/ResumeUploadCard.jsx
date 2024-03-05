import React from "react";
import { ReactComponent as UploadIcon } from "../../assets/icons/files/Document-Upload-2.svg"; 

const ResumeUploadCard = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Resume</h2>
      <div className="flex items-center justify-between mb-4">
        <button className="flex items-center bg-customTeal text-white px-4 py-2 rounded-lg">
          <UploadIcon className="w-6 h-6 fill-current mr-2" />
          Upload Resume
        </button>
        <span className="text-sm text-gray-600">
          Supported Format: PDF, TXT
        </span>
      </div>
    </div>
  );
};

export default ResumeUploadCard;
