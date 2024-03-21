import React from "react";
import ProfileTabs from "../components/ProfileTabs";
import ProfileForm from "../components/ProfileForm";
import ResumeUploadCard from "../components/PersonalProfile/ResumeUploadCard";

export default function ProfilePage() {
  return (
    <>
      <ProfileTabs />

      <div className="flex flex-row ">
        <div className="flex-auto">
          <h1 className="text-lg font-medium">Personal Details</h1>

          <ProfileForm />
        </div>

        <div className="max-w-[450px]">
          <ResumeUploadCard />
        </div>
      </div>
    </>
  );
}
