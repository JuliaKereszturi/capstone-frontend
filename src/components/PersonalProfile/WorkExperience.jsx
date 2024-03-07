import React from "react";
import { ReactComponent as EditSquare } from "../../assets/icons/files/Edit-Square.svg";
import { ReactComponent as AddSvg } from "../../assets/icons/essential/add.svg";
import Button from "../button/buttons";
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
      <h2 className="h4 font-roboto !font-semibold mb-4">Work Experience</h2>
      {/* change keys to ids here */}
      {experiences.map((exp, index) => (
        <div key={exp.role} className="mb-6 flex justify-between">
          <div>
            <h3 className="!font-semibold font-roboto h5 text-primary-450 pb-2 !tracking-normal">
              {exp.role}
            </h3>
            <p className="text-grayish body-text font-roboto pb-2 !tracking-normal">
              {exp.company}
            </p>
            <p className="text-grayish small-text font-roboto pb-3 !tracking-normal">
              {exp.period}
            </p>
            <p className="text-primary-450 small-text-bold font-roboto ">
              Job Description
            </p>
            <ul className="text-grayish font-roboto list-disc small-text ml-5 !tracking-normal">
              {exp.descriptions.map((desc, idx) => (
                <li key={desc}>{desc}</li>
              ))}
            </ul>
          </div>
          <EditSquare className=" min-w-6 min-h-6 w-6 h-6 fill-current text-primary-600" />
        </div>
      ))}

      <Button
        variant="secondary"
        onClick={() => console.log("Upload resume button clicked")}
      >
        <AddSvg className="w-6 h-6 fill-current" />
        <div> Add Work Experience</div>

        {/* <p className="font-semibold"> Add Work Experience</p> */}
      </Button>
    </div>
  );
};

export default WorkExperience;
