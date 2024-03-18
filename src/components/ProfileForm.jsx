import { chunk } from "lodash";
import React from "react";
import { useForm } from "react-hook-form";

const profileFormDefinition = [
  {
    label: "First Name",
    name: "firstName",
  },
  {
    label: "Last Name",
    name: "lastName",
  },
  {
    label: "Email Address",
    name: "emailAddress",
  },
  {
    label: "Phone Number",
    name: "phoneNumber",
  },
  {
    label: "Industry",
    name: "industry",
  },
  {
    label: "Role",
    name: "role",
  },
  {
    label: "Country",
    name: "country",
  },
  {
    label: "City",
    name: "city",
  },
  {
    label: "Portfolio Link",
    name: "portfolioLink",
  },
  {
    label: "Work Availability",
    name: "availability",
  },
];

export default function ProfileForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  const fields = chunk(profileFormDefinition, 2).map((chunk, index) => {
    const innerFields = chunk.map((field) => {
      return (
        <div className="sm:col-span-3" key={field.name}>
          <label
            htmlFor={field.name}
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            {field.label}
          </label>
          <div className="mt-2">
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register(field.name)}
            />
          </div>
        </div>
      );
    });

    return (
      <div
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
        key={index}
      >
        {innerFields}
      </div>
    );
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields}

      <div className="mt-6 flex items-center gap-x-6">
        <button
          type="submit"
          className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          style={{ backgroundColor: "#337070" }}
        >
          Save Details
        </button>
      </div>
    </form>
  );
}
