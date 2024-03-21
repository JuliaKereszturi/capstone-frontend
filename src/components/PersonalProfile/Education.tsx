import React from "react";
import AddEducationCard from "./AddEducationCard.tsx";
const Education = () => {

  const educationItems = [
    {
      name: "BSc in Information Technology",
      detail: "Chinhoyi University of Technology",
      year: "2021",
    },
    // Add more education items here
  ];

  return (
    <AddEducationCard
      title="Education"
      items={educationItems}
      onAddClick={() => console.log("Add education")}
    />
  );
};

export default Education;
