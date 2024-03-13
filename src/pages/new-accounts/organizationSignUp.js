import Button from "../../components/button/buttons";
import InputField from "../../components/input_fields/input_fields";
import DropdownField from "../../components/dropdown/drop_down";
import mainImage3 from "../../assets/images/account-creation-login/main-image3.png";
import { ReactComponent as Logo } from "../../assets/images/logo/logo1.svg";
import React, { useState } from "react";
import "./signUp.css";
export default function OrganizationSignUp() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="scale-down">
      <div className="flex f  lex-row page-box">
        <div className="flex flex-col signup-box pt-40 relative">
          <Logo className="w-40 h-[86px] absolute top-10" />
          <div className="flex flex-row space-x-4">
            <div className="flex flex-col">
              <div className="relative pb-1">
                <button className="small-text-bold font-roboto">
                  Organization
                </button>
                <svg className=" absolute top-full stroke-primary-600">
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
            <div className="flex flex-col pb-8">
              <div className="relative pb-1">
                <button
                  className="group font-roboto small-text hover:font-bold"
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
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col relative  create-account-text-box">
              <h1 className="font-roboto h2">Create Your Zinio Account</h1>
              <p className="small-text font-roboto text-grayish mt-5 mb-10">
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
                  height: "3.5rem" /* 56px / 16px */,
                  width: "13.75rem" /* 220px / 16px */,
                  marginRight: "0.625rem" /* 10px / 16px */,
                }}
              />
              <InputField
                label="Last Name"
                type="text"
                placeholder="Chamu"
                required
                style={{
                  height: "3.5rem" /* 56px / 16px */,
                  width: "13.75rem" /* 220px / 16px */,
                  marginRight: "0.625rem" /* 10px / 16px */,
                }}
              />
            </div>
            <InputField
              label="Company Name"
              type="text"
              placeholder="Velocity Technology Inc"
              required
              style={{
                height: "3.5rem" /* 56px / 16px */,
                width: "28.125rem" /* 450px / 16px */,
                marginTop: "0.375rem" /* 6px / 16px */,
                marginRight: "0.625rem" /* 10px / 16px */,
              }}
            />

            <DropdownField
              label="Company Industry"
              options={[
                { value: "1", label: "Software Development" },
                { value: "2", label: "Finance" },
                { value: "3", label: "Health" },
                { value: "4", label: "Education" },
                { value: "5", label: "Agriculture" },
              ]}
              required
              style={{
                height: "3.5rem" /* 56px / 16px */,
                width: "28.125rem" /* 450px / 16px */,
                marginTop: "0.375rem" /* 6px / 16px */,
                marginRight: "0.625rem" /* 10px / 16px */,
              }}
            />

            <InputField
              label="Email"
              type="email"
              placeholder="example@domain.com"
              style={{
                height: "3.5rem" /* 56px / 16px */,
                width: "28.125rem" /* 450px / 16px */,
                marginTop: "0.375rem" /* 6px / 16px */,
                marginRight: "0.625rem" /* 10px / 16px */,
              }}
            />
            <InputField
              label="Password"
              type="password"
              placeholder="************"
              required
              style={{
                height: "3.5rem" /* 56px / 16px */,
                width: "28.125rem" /* 450px / 16px */,
                marginTop: "0.375rem" /* 6px / 16px */,
                marginRight: "0.625rem" /* 10px / 16px */,
              }}
            />
            <Button
              style={{
                height: "3.5rem" /* 56px / 16px */,
                width: "28.125rem" /* 450px / 16px */,
                marginTop: "0.375rem" /* 6px / 16px */,
                marginRight: "0.625rem" /* 10px / 16px */,
              }}
              variant="create-account"
              onClick={() => {}}
            >
              Create Account
            </Button>
            <div className="small-text text-grayish flex flex-row">
              <p className="mt-4 mb-4">Already have a Zinio account? </p>{" "}
              <a className="font-bold pl-1 text-primary-600 mt-4" href="/">
                Sign In
              </a>
            </div>
            <div className="small-text text-grayish flex flex-row text-container">
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
          src={mainImage3}
          alt="Collage of happy people"
          className="image-signup organization-image justify-center hidden md:block "
        />
      </div>
    </div>
  );
}
