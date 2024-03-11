import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import SetNewPassword from "./pages/new-accounts/setNewPassword";
import Carousel from "./components/carousel/carousel";
import ConfirmPasswordSet from "./pages/new-accounts/confirmPasswordSet";
import ContractorSignUp from "./pages/new-accounts/contractorSignUp";
import OrganizationSignUp from "./pages/new-accounts/organizationSignUp";
import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";
function App() {
  return (
    <div className="">
      <ConfirmPasswordSet/>
    </div>
  );
}

export default App;
