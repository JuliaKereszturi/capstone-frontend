import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import awsExports from './aws-exports';
import { Amplify } from 'aws-amplify';

import config from './amplifyconfiguration.json';
Amplify.configure(config);

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


// Amplify.configure({
//   Auth: {
//     region: "us-east-1",
//     userPoolId: "us-east-1_b4F3Iikjv",
//     userPoolWebClientId: "5a9eaid7lgcub5ifv2474tmr3t",
//     loginWith : {
//       username: true
//     }
//   }
// })