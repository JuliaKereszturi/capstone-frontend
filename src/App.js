// import "./App.css";
// import ContractorSignUp from "./pages/new-accounts/contractorSignUp";
// import OrganizationSignUp from "./pages/new-accounts/organizationSignUp";
// // import { Amplify } from "aws-amplify";
// // import awsExports from "../aws-exports";
// function App() {
//   return (
//     <div className="">
//       <ContractorSignUp />
//     </div>
//   );
// }

// export default App;


import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);