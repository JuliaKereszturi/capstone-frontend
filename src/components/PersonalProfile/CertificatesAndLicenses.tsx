import React from "react";
import AddEducationCard from "./AddEducationCard.tsx";
const CertificatesAndLicenses = () => {

    const certificates = [
      { name: "Javascript Crash Course", detail: "Coursera", year: "2021" },
      // Add more certificates here
    ];

  return (
    <AddEducationCard 
    title="Certificates & Licenses" 
    items={certificates} 
    onAddClick={() => console.log("Add certificate")} />

  );
};

export default CertificatesAndLicenses;