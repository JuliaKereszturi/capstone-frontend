import React from "react";
import AvatarProfile from "../../assets/images/avatarProfile.png";
import { ReactComponent as EditSquare } from "../../assets/icons/files/Edit-Square.svg";

const PersonalDetails = () => {
  return (
    <div
      className="border rounded-lg border-gray-200 shadow-custom"
      style={{
        padding: "30px", // This sets the padding to 30px
        borderRadius: "10px", // This sets the border-radius to 10px
        boxShadow: "2px 4px 6px 0 rgba(0, 0, 0, 0.13)",
      }}
    >
      <div className="flex justify-between">
        <div className="flex items-center space-x-5">
          <img
            src={AvatarProfile} // If the image is imported
            alt="Joy Gomba"
            className="rounded-full"
            // Set width and height if necessary
            style={{ width: "74px", height: "74px" }}
          />
          <div>
            <h1 className="text-2xl font-bold text-black-600 leading-tight">
              Joy Gomba
            </h1>
            <p className="text-primary-400 font-normal">Project Manager</p>
            <p className="text-grayish text-[13px]">Harare, Zimbabwe</p>
          </div>
        </div>
        <EditSquare className="w-5 h-5  fill-current text-primary-600" />
      </div>
      <div className="my-4">
        <h3 className="text-lg text-primary-500 font-semibold">Bio</h3>
        <p className="text-grayish text-[13px]">
          Experienced project manager with a track record of success in diverse
          industries. Certified as a Project Management Professional (PMP) and
          skilled in agile methodologies. Strong leadership, budgeting, risk
          management, and team collaboration abilities.
        </p>
      </div>
      <hr className="my-4 border-primary-300" />
      <div className="">
        <div className="flex justify-between mb-5">
          <h4 className="text-sm font-semibold text-primary-400">Industry</h4>
          <p className="text-sm text-grayish">Software Development</p>
        </div>
        <div className="flex justify-between mb-5">
          <h4 className="text-sm font-semibold text-primary-400">
            Phone Number:
          </h4>
          <p className="text-sm text-grayish">+263 7785 6579</p>
        </div>
        <div className="flex justify-between mb-5">
          <h4 className="text-sm font-semibold text-primary-400">Email:</h4>
          <p className="text-sm text-grayish">joy@velocitytech.inc</p>
        </div>
        <div className="flex justify-between mb-5">
          <h4 className="text-sm font-semibold text-primary-400">LinkedIn:</h4>
          <p className="text-sm text-grayish">www.linkedin.com/joy...</p>
        </div>
        <div className="flex justify-between">
          <h4 className="text-sm font-semibold text-primary-400">
            Availability:
          </h4>
          <p className="text-sm text-grayish">2 Weeks</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
