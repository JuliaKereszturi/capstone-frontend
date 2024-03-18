import React from "react";
import ProfileTabs from "./ProfileTabs";
import Sidebar from "./Sidebar";
import ProfileForm from "./ProfileForm";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
export default function Layout() {
  return (
    <>
      <div>
        <Sidebar />

        <div className="xl:pl-72">
          {/* Sticky search header */}
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 px-4 shadow-sm sm:px-6 lg:px-8 pt-4">
            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <h1 className="text-xl font-semibold">Profile</h1>
            </div>
            <div>
              {" "}
              <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <main className="pl-6 pr-6">
            <ProfileTabs />

            <h1 className="text-lg font-medium">Personal Details</h1>

            <ProfileForm />
          </main>
        </div>
      </div>
    </>
  );
}
