import React from "react";
import { ReactComponent as EditSquare } from "../../assets/icons/files/Edit-Square.svg";
import { ReactComponent as AddSvg } from "../../assets/icons/essential/add.svg";

const WorkExperience = () => {

  const experiences = [
    {
      role: "Project Manager",
      company: "Velocity Technology Inc",
      period: "May 2023 - Present",
      descriptions: [
        "Define project objectives, scope, and deliverables.",
        "Develop a comprehensive project plan, including timelines, milestones, and resource allocation.",
        "Create a project schedule and set clear deadlines.",
        "Assemble and lead cross-functional project teams.",
        "Delegate tasks and responsibilities to team members.",
        "Motivate and manage team members to ensure they meet project goals.",
      ],
    },
    {
      role: "Developer",
      company: "Velocity Technology Inc",
      period: "May 2023 - Present",
      descriptions: [
        "Define project objectives, scope, and deliverables.",
        "Develop a comprehensive project plan, including timelines, milestones, and resource allocation.",
        "Create a project schedule and set clear deadlines.",
        "Assemble and lead cross-functional project teams.",
        "Delegate tasks and responsibilities to team members.",
        "Motivate and manage team members to ensure they meet project goals.",
      ],
    },
  ];

  return (
    <div
      className="border rounded-lg border-gray-200 shadow-custom"
      style={{
        padding: "30px 20px",
        borderRadius: "20px",
        boxShadow: "4px 5px 20px 4px #95989E14",
      }}
    >
      <h2 className="text-2xl text-black font-semibold mb-4">
        Work Experience
      </h2>
      {/* change keys to ids here */}
      {experiences.map((exp, index) => (
        <div key={exp.role} className="mb-6 flex justify-between">
          <div>
            <h3 className="text-primary-500 font-bold text-lg font-roboto">
              {exp.role}
            </h3>
            <p className="text-grayish font-roboto">{exp.company}</p>
            <p className="text-grayish font-roboto text-[13px]">{exp.period}</p>
            <p className="text-primary-500 font-bold font-roboto text-[13px]">
              Job Description
            </p>
            <ul className="list-disc ml-5 text-grayish text-[13px]">
              {exp.descriptions.map((desc, idx) => (
                <li key={desc}>{desc}</li>
              ))}
            </ul>
          </div>
          <EditSquare className=" min-w-6 min-h-6 w-6 h-6 fill-current text-primary-600" />
        </div>
      ))}

      <button className="flex items-center justify-center bg-white text-primary-400 border border-primary-400 font-roboto py-2 px-4 rounded hover:bg-primary-500 hover:border-primary-500 hover:text-white transition ease-in duration-200">
        <AddSvg />
        Add Work Experience
      </button>
    </div>
  );
};

export default WorkExperience;
