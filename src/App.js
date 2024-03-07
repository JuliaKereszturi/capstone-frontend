import "./App.css";


import WorkExperience from "./components/PersonalProfile/WorkExperience";
import CertificatesAndLicenses from "./components/PersonalProfile/CertificatesAndLicenses.tsx";
import ResumeUploadCard from "./components/PersonalProfile/ResumeUploadCard";
import Education from "./components/PersonalProfile/Education.tsx";
import PersonalDetails from "./components/PersonalProfile/PersonalDetails.tsx";

function App() {
  return (
    // <div className="App flex mt-12 border-8 w-1/2 bg-primary-200 ">
    //   <h1 className="mr-2 pr-4 border-r-4 font-roboto">COMING SOON PAGE</h1>
    //   <CalenderSVG className="w-10 h-10 stroke-primary-100 fill-current text-primary-300" />
    //   <p className="font-roboto small-text-bold">Body text2</p>
    // </div>
    <div className=" m-12  ">
      {/* <PersonalDetails /> */}
      <WorkExperience />
      <PersonalDetails/>
      <CertificatesAndLicenses />
      <Education />
      <ResumeUploadCard />
    </div>
  );
}


export default App;
