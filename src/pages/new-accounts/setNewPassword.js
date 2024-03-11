import Button from "../../components/button/buttons";
import InputField from "../../components/input_fields/input_fields";
import mainImage3 from "../../assets/images/account-creation-login/main-image2.png";
import { ReactComponent as Logo } from "../../assets/images/logo/logo1.svg";
import React from "react";
import "./signUp.css";
export default function SetNewPassword() {
  return (
    <div>
      <div className="flex flex-row page-box">
        <div className="flex flex-col signup-box pt-32 relative">
          <Logo className="zinio-logo absolute top-0 left-0" />
          <div className="flex flex-col">
            <div className="flex flex-col relative absolute create-account-text-box">
              <h1 className="font-roboto h2">New Password</h1>
              <p class="small-text font-roboto text-grayish mt-5 mb-10">
                Set your new secure password
              </p>
            </div>

            <InputField
              label="New Password"
              type="password"
              placeholder="************"
              style={{
                height: "56px",
                width: "450px",
                marginTop: "6px",
                marginRight: "10px",
              }}
            />
            <InputField
              label="Confirm Password"
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
              variant="primary"
              onClick={() => {}}
            >
              Create Password
            </Button>
          </div>
          <div className="small-text text-grayish flex flex-row">
              <p class="mt-4 mb-4">Already have a Zinio account? </p>{" "}
              <a class="font-bold pl-1 text-primary-600 mt-4" href="/">
                Sign In
              </a>
            </div>
        </div>
        <img
          className="image-signup py-12"
          src={mainImage3}
          alt="main-image3"
        />
      </div>
    </div>
  );
}