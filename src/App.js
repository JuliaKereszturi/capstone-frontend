import "./App.css";

import OrganizationSignUp from "./pages/new-accounts/organizationSignUp";
import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";

function App() {
  return (
    <div>
      <OrganizationSignUp />
    </div>
  );
}

export default App;
