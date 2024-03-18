import Button from "../../components/button/buttons";
import InputField from "../../components/input_fields/input_fields";
import mainImage3 from "../../assets/images/account-creation-login/main-image2.png";
import { ReactComponent as Logo } from "../../assets/images/logo/logo1.svg";
import React, { useState } from "react";
import "./signUp.css";
import { signUp } from 'aws-amplify/auth';


import '@aws-amplify/ui-react/styles.css';
export default function ContractorSignUp() {
  const [isHovered, setIsHovered] = useState(false);
  const [username, setFirstName] = useState("")
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyIndustry, setCompanyIndustry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [fieldError, setFieldError] = useState(false);

  async function handleSignUp() {


   console.log('hrtre', username)
    try {
      const {  userId } = await signUp({
        username,
        password,
        options: {
          userAttributes: {
            email,
            // phone_number // E.164 number convention
          },
          // optional
          autoSignIn: true // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
        }
      });

      console.log(userId);
    } catch (error) {
      console.log('error signing up:', error);
    }
  }



  return (
    <div>
      <div className="flex flex-row page-box">
        <div className="flex flex-col signup-box pt-32 relative">
          <Logo className="zinio-logo absolute top-0 left-0" />
          <div className="flex flex-row space-x-4">
            <div className="flex flex-col">
              <div className="relative pb-1">
                <p class="small-text-bold font-roboto">Personal Account</p>
                <svg className=" absolute top-full stroke-primary-600">
                  <line
                    x1="5"
                    y1="0"
                    x2="105"
                    y2="0"
                    style={{ strokeWidth: 4 }}
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col pb-8">
              <div className="relative pb-1">
                <p
                  className="group font-roboto small-text hover:font-bold"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Organization
                </p>
                <svg
                  className={`absolute top-full transition duration-500 ease-in-out stroke-primary-600 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ pointerEvents: "none" }}
                >
                  <line
                    x1="5"
                    y1="0"
                    x2="75"
                    y2="0"
                    style={{ strokeWidth: 4 }}
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col relative create-account-text-box">
              <h1 className="font-roboto h2">Create Your Zinio Account</h1>
              <p class="small-text font-roboto text-grayish mt-5 mb-10">
                You're one step away from your role
              </p>
            </div>
            <div className="flex flex-row">
              <InputField
                label="First Name"
                type="text"
                placeholder="Farai"
                required
                value={username}
                onChange={(e => setFirstName(e.target.value)

                )}
                style={{
                  height: "56px",
                  width: "220px",
                  marginRight: "10px",
                  
                }}
              />
              <InputField
                label="Last Name"
                type="text"
                placeholder="Chamu"
                value={lastName}
                onChange={(e => setLastName(e.target.value))}
                required
                style={{ height: "56px", width: "220px", marginRight: "10px" }}
              />
            </div>

            <InputField
              label="Email"
              type="email"
              placeholder="example@domain.com"
              value={email}
              onChange= {(e) => setEmail(e.target.value)}
              style={{
                height: "56px",
                width: "450px",
                marginTop: "6px",
                marginRight: "10px",
              }}
            />
            <InputField
              label="Password"
              type="password"
              placeholder="************"
              value={password}
              onChange = {(e) => setPassword(e.target.value)}
              required
              style={{
                height: "56px",
                width: "450px",
                marginTop: "6px",
                marginRight: "10px",
              }}
            />
            <Button
              style={{
                height: "56px",
                width: "450px",
                marginTop: "6px",
                marginRight: "10px",
              }}
              variant="create-account"
              onClick={() => handleSignUp()}
            >
              Create Account
            </Button>
            <div className="small-text text-grayish flex flex-row">
              <p class="mt-4 mb-4">Already have a Zinio account? </p>{" "}
              <a class="font-bold pl-1 text-primary-600 mt-4" href="/">
                Sign In
              </a>
            </div>
            <div className="small-text text-grayish flex flex-row">
              <p>
                By creating an account, you are authorizing{" "}
                <a className="font-bold pl-1 text-primary-600" href="/">
                  Zinio Talent Hub
                </a>{" "}
                authorized personnel and its service providers access to your
                personal information for the purpose of securing employment on
                your behalf. You acknowledge that you have read and fully
                understand the{" "}
                <a className="font-bold pl-1 text-primary-600" href="/">
                  Privacy policy
                </a>{" "}
                and{" "}
                <a className="font-bold pl-1 text-primary-600" href="/">
                  Terms and Conditions.
                </a>
              </p>
            </div>
          </div>
        </div>
        <img
          className="image-signup py-12"
          src={mainImage3}
          alt="main-image2"
        />
      </div>
    </div>
  );
}
