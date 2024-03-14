import React from "react";
import Button from "../button/buttons";

const JobCard = () => {
  return (
    <div className="bg-veryLightGray max-w-[1018px] rounded-custom border-[0.5px] border-softTeal p-[20px]">
      <div className="flex justify-between items-center mb-4">
        <div className="flex">
          <div className="text-[12px]  bg-darkTeal text-white rounded-[36px] px-[8px] pt-[3px] h-[23px]">
            Software Engineering
          </div>
          <div className="small-text text-offBlack px-2 py-1">On-Site</div>
        </div>
        <div>
          <div className="small-text text-offBlack">Created: 23 Oct 2023</div>
          <div className="small-text text-offBlack">
            Expires in:{" "}
            <span className="small-text-bold text-red">10 days</span>
          </div>
        </div>
      </div>
      <h2 className="h3">Front End Developer</h2>
      <p className="body-text text-grayMedium mb-4">Harare, Zimbabwe</p>
      <div className="flex justify-between ">
        <div className="flex gap-x-6 md:gap-x-10">
          <div className=" border-r border-borderGray pr-6 md:pr-10">
            <p className="text-2xl font-bold">120</p>
            <p className="text-sm text-gray-500">Total Applicants</p>
          </div>
          <div className="border-r border-borderGray pr-6 md:pr-10">
            <p className="text-2xl font-bold text-skyBlue">70</p>
            <p className="text-sm text-gray-500">Reviewed</p>
          </div>
          <div className="border-r border-borderGray pr-6 md:pr-10">
            <p className="text-2xl font-bold text-deepRed">12</p>
            <p className="text-sm text-gray-500">Interviewed</p>
          </div>
          <div className="pr-4">
            <p className="text-2xl font-bold text-vibrantGreen">2</p>
            <p className="text-sm text-gray-500">Hired</p>
          </div>
        </div>
        <div style={{ maxWidth: "143px" }}>
          <Button
            
            variant="secondary"
            onClick={() => {}}
          >
            More Details <span> &gt; </span>
          </Button>
        </div>
      </div>
      <div className="flex justify-end"></div>
    </div>
  );
};

export default JobCard;
