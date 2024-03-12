import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import awsExports from './aws-exports';
import { Amplify } from 'aws-amplify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Configure Amplify in index file or root file
// Amplify.configure({
//   Auth: {
//       region: awsExports.REGION,
//       userPoolId: awsExports.USER_POOL_ID,
//       userPoolWebClientId: awsExports.USER_POOL_APP_CLIENT_ID
//   }
// })


Amplify.configure({
  Auth: {
    region: "us-east-1",
    userPoolId: "us-east-1_EbrAdF2L3",
    userPoolWebClientId: "j0o4cuh5aj1md36h8uma2ujs9",
    loginWith : {
      username: true
    }
  }
})