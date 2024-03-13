import "./App.css";

import ContractorSignUp from "./pages/new-accounts/contractorSignUp";
import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";
import ResetPassword from "./pages/new-accounts/resetPassword";

function App() {
  return (
    <div>
      <ContractorSignUp />
    </div>
  );
}

export default App;
