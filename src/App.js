import "./App.css";
import { ReactComponent as CalenderSVG } from "./assets/icons/users/group-2.svg";
import WorkExperience from "./components/PersonalProfile/WorkExperience";
import CertificatesAndLicenses from "./components/PersonalProfile/CertificatesAndLicenses";
import ResumeUploadCard from "./components/PersonalProfile/ResumeUploadCard";

function App() {
  return (
    // <div className="App flex mt-12 border-8 w-1/2 bg-primary-200 ">
    //   <h1 className="mr-2 pr-4 border-r-4 font-roboto">COMING SOON PAGE</h1>
    //   <CalenderSVG className="w-10 h-10 stroke-primary-100 fill-current text-primary-300" />
    //   <p className="font-roboto small-text-bold">Body text2</p>
    // </div>

    <div className=" m-12  ">
      {/* <PersonalDetails /> */}
      <WorkExperience/>
      <CertificatesAndLicenses/>
      <ResumeUploadCard/>
</div>
  );
}

export default App;
