import "./App.css";

import ContractorSignUp from "./pages/new-accounts/contractorSignUp";
import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";
import StatisticCardHolder from "./components/CompanyDashboard/StatisticCardHolder.tsx";

function App() {
  return (
    <div>
      <StatisticCardHolder />
    </div>
  );
}

export default App;
