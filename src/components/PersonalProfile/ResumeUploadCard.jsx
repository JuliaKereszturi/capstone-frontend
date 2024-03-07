import React from "react";
import { ReactComponent as UploadIcon } from "../../assets/icons/arrows/arrows-upload.svg"; 
import Button from "../button/buttons";
const ResumeUploadCard = () => {
  return (
    <div className="bg-white border rounded-[20px] p-6 shadow-lg max-w-[450px] mx-auto">
      <p className=" h4 font-roboto font-semibold mb-4 gap-2">Resume</p>

      <div className="flex flex-wrap items-center justify-between mb-4">
        {/* <button className="mr-1 flex items-center border text-primary-300 px-4 py-2 rounded-lg">
          <UploadIcon className="w-6 h-6 fill-current mr-2" />
          Upload Resume
        </button> */}
        <Button
          variant="secondary"
          onClick={() => console.log("Upload resume button clicked")}
        >
          <UploadIcon className="w-6 h-6 fill-current mr-2" />
          Upload Resume
        </Button>
        <p className="pt-1 font-roboto text-sm font-normal text-grayMedium">
          Supported Format: PDF, TXT
        </p>
      </div>
    </div>
  );
};

export default ResumeUploadCard;
