import "./App.css";

import ContractorSignUp from "./pages/new-accounts/contractorSignUp";
import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";
import StatisticCardHolder from "./components/CompanyDashboard/StatisticCardHolder.tsx";
import JobCard from "./components/CompanyDashboard/JobCard.tsx";
function App() {
  return (
    <div>
      <StatisticCardHolder />
      <JobCard />
    </div>
  );
}

export default App;
