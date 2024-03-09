import Button from "../../components/button/buttons";
import InputField from "../../components/input_fields/input_fields";
import mainImage3 from "../../assets/images/account-creation-login/main-image3.png";
import { ReactComponent as Logo } from "../../assets/images/logo/logo1.svg";
import mainImage2 from "../../assets/images/account-creation-login/main-image2.png";
import React, { useState } from "react";
import { useEffect } from "react";
import "./signUp.css";

export default function OrganizationSignUp() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredPersonal, setIsHoveredPersonal] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(true);

  useEffect(() => {
    console.log(selectedAccount);
  }, [selectedAccount]);

  return (
    <div>
      <div className="flex flex-row page-box">
        <div className="flex flex-col signup-box pt-32 relative">
          <Logo className="zinio-logo absolute top-0 left-0" />
          <div className="flex flex-row space-x-4">
            <div className="flex flex-col">
              <div className="relative pb-1">
                <button
                  className={`group font-roboto ${
                    selectedAccount ? "small-text-bold" : "small-text"
                  }`}
                  onClick={() => setSelectedAccount(true)}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Personal Account
                </button>

                <svg
                  className={`absolute top-full transition duration-500 ease-in-out stroke-primary-600 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ pointerEvents: "none" }}
                >
                  <line x1="5" y1="0" x2="75" y2="0" />
                </svg>

                <svg
                  className={`absolute top-full transition duration-500 ease-in-out stroke-primary-600 ${
                    isHovered || selectedAccount ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ pointerEvents: "none" }}
                >
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
                <button
                  className={`group font-roboto ${
                    selectedAccount === "Personal"
                      ? "small-text-bold"
                      : "small-text"
                  }`}
                  onClick={() => setSelectedAccount(false)}
                  onMouseEnter={() => setIsHoveredPersonal(true)}
                  onMouseLeave={() => setIsHoveredPersonal(false)}
                >
                  Personal Account
                </button>

                <svg
                  className={`absolute top-full transition duration-500 ease-in-out stroke-primary-600 ${
                    isHoveredPersonal || !selectedAccount
                      ? "opacity-100"
                      : "opacity-0"
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
            <div className="flex flex-col relative absolute create-account-text-box">
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
                required
                style={{ height: "56px", width: "220px", marginRight: "10px" }}
              />
            </div>
            {selectedAccount === true ? (
              <InputField
                label="Company Name"
                type="text"
                placeholder="Velocity Technology Inc"
                required
                style={{
                  height: "3.5rem",
                  width: "28.125rem",
                  marginTop: "0.375rem",
                  marginRight: "0.625rem",
                }}
              />
            ) : null}
            <InputField
              label="Email"
              type="email"
              placeholder="example@domain.com"
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
              onClick={() => {}}
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
          src={selectedAccount === true ? mainImage3 : mainImage2}
          alt="main-image"
        />
      </div>
    </div>
  );
}
