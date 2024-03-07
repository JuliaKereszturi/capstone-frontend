import React from "react";
import AvatarProfile from "../../assets/images/avatarProfile.png";
import { ReactComponent as EditSquare } from "../../assets/icons/files/Edit-Square.svg";

interface PersonalInfo {
  name: string;
  profession: string;
  city: string;
  country: string;
  bio: string;
}

interface ContactDetail {
  label: string;
  value: string;
}

const personalInfo: PersonalInfo = {
  name: "Joy Gomba",
  profession: "Project Manager",
  city: "Harare",
  country: "Zimbabwe",
  bio: "Experienced project manager with a track record of success in diverse industries. Certified as a Project Management Professional (PMP) and skilled in agile methodologies. Strong leadership, budgeting, risk management, and team collaboration abilities.",
};

const contactDetails: ContactDetail[] = [
  { label: "Industry", value: "Software Development" },
  { label: "Phone Number", value: "+263 7785 6579" },
  { label: "Email", value: "joy@velocitytech.inc" },
  { label: "LinkedIn", value: "www.linkedin.com/joy..." },
  { label: "Availability", value: "2 Weeks" },
];

const PersonalDetails: React.FC = () => {
  return (
    <div className="bg-white shadow-lg font-roboto p-6 border rounded-[20px] border-gray-200 rounded-xlg max-w-[510px]">
      <div className="flex justify-between">
        <div className="flex items-center space-x-5">
          <img
            src={AvatarProfile} // If the image is imported
            alt="Joy Gomba"
            className="rounded-full"
            style={{ width: "74px", height: "74px" }}
          />

          <div>
            <h1 className="h4 !font-semibold mb-4 !tracking-normal">
              {personalInfo.name}
            </h1>
            <p className="text-primary-400 body-text !tracking-normal">
              {personalInfo.profession}
            </p>
            <p className="text-grayish small-text">
              {personalInfo.city}, {personalInfo.country}
            </p>
          </div>
        </div>
        <EditSquare className="w-5 h-5 fill-current text-primary-600" />
      </div>
      <div className="my-4">
        <h3 className="text-lg text-primary-500 font-semibold">Bio</h3>
        <p className="mt-2 text-sm text-gray-600">{personalInfo.bio}</p>
      </div>

      <hr className="my-4 border-primary-300" />

      <div>
        {contactDetails.map((detail, index) => (
          <div key={`{index}-{detail}`} className="flex justify-between mb-5">
            <h4 className="small-text-bold text-primary-400">
              {detail.label}:
            </h4>
            <p className="body-text2 text-grayish">{detail.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default PersonalDetails;
