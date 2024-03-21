import React from "react";
import ProfileTabs from "../components/ProfileTabs";
import Sidebar from "../components/Sidebar";
import ProfileForm from "../components/ProfileForm";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function ProfilePage() {
  return (
    <>
      <ProfileTabs />

      <h1 className="text-lg font-medium">Personal Details</h1>

      <ProfileForm />
    </>
  );
}
