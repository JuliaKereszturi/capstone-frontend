import Button from "../../components/button/buttons";
import InputField from "../../components/input_fields/input_fields";
import mainImage3 from "../../assets/images/account-creation-login/main-image3.png";
import { ReactComponent as Logo } from "../../assets/images/logo/logo1.svg";
import React, { useState } from "react";
import "./signUp.css";
export default function ResetPassword() {

  return (
    <div>
      <div className="flex flex-row page-box">
        <div className="flex flex-col signup-box pt-32 relative">
          <Logo className="zinio-logo absolute top-0 left-0" />
          <div className="flex flex-row space-x-4">


          </div>
          <div className="flex flex-col">
            <div className="flex flex-col relative create-account-text-box">
              <h1 className="font-roboto h2">Reset Password</h1>
              <p className="small-text font-roboto text-grayish mt-5 mb-10">
                Please provide the email address associated with your account,
                <br></br>
                and we'll send you the details to reset your password.
              </p>
            </div>


            <InputField
              label="Email Address"
              type="email"
              placeholder="example@domain.com"
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
              onClick={() => { }}
            >
              Reset Password
            </Button>
            <div className="small-text text-grayish flex flex-row">
              <p className="mt-4 mb-4">Already have a Zinio account? </p>{" "}
              <a className="font-bold pl-1 text-primary-600 mt-4" href="/">
                Sign In
              </a>
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