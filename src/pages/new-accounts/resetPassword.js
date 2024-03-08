import Button from "../../components/button/buttons";
import InputField from "../../components/input_fields/input_fields";
import mainImage3 from "../../assets/images/account-creation-login/main-image3.png";
import { ReactComponent as Logo } from "../../assets/images/logo/logo1.svg";
import React, { useState } from "react";
import "./signUp.css";
const ResetPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle the reset password submission
  };

  return (
    
    <div className="flex items-center justify-center md:justify-between p-8 md:p-32 max-w-[1450px] mx-auto">
        <div className="md:w-[450px] max-w-[450px] max-h-[500px] md:pr-24">
          <div >
          <Logo className="mb-4 w-32" />
          <h1 className="font-roboto h2 !tracking-normal">Reset Password</h1>
          <p className="small-text font-roboto text-grayish mt-5 mb-10 !tracking-normal">
            Please provide the email address associated with your account, and we'll send you the
            details to reset your password.
          </p>
          <form onSubmit={handleSubmit}>

            <InputField
              label="Email Address"
              type="email"
              placeholder="example@domain.com"
              style={{
              paddingTop: "0.5rem",
               paddingBottom: "0.5rem"
            
              }}
            />
            <Button
              style={{ width: "100%", maxWidth: "450px" }}
              variant="primary"
              onClick={() => { }}
             
            >
              Reset Password
            </Button>
          </form>
          <p className="small-text font-roboto mt-4 !tracking-normal">
            Already have a Zinio account? <a href="/signin" className="small-text-bold font-roboto text-primary-600">Sign in</a>
          </p>
        </div>

            </div>
       
        <div className="hidden md:block md:w-1/2 flex justify-center">
          <img src={mainImage3} alt="Collage of happy people" className="rounded-lg" />
        </div>
      </div>
     
  );
};

export default ResetPassword;