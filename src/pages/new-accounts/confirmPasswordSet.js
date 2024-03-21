import Button from "../../components/button/buttons";
import mainImage3 from "../../assets/images/account-creation-login/main-image2.png";
import { ReactComponent as Logo } from "../../assets/images/logo/logo1.svg";
import React, { useState } from "react";
import "./confirmPasswordSet.css";

export default function ConfirmPasswordSet() {
  const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""]);

  const handleChange = (index, value) => {
    const newVerificationCode = [...verificationCode];
    newVerificationCode[index] = value;
    setVerificationCode(newVerificationCode);
  };

  return (
    <div>
      <div className="flex flex-col page-box">
        <div className="flex flex-col verification-box pt-32 relative">
          <Logo className="zinio-logo top-0 left-0" />
          <div className="flex flex-col">
            <div className="flex flex-col relative absolute create-account-text-box">
              <h1 className="font-roboto h2">Verification</h1>
              <p className="small-text font-roboto text-grayish mt-5 ">
                Enter the verification code sent to your email.
              </p>
            </div>
            <div className="flex mt-5 mb-5">
              {verificationCode.map((value, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={value}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    // Ensure only numbers are allowed
                    if (/^\d*$/.test(newValue)) {
                      handleChange(index, newValue);
                      // Move to the next input box if a number is entered
                      if (newValue && index < 5) {
                        document.getElementById(`verification-input-${index + 1}`).focus();
                      }
                    }
                  }}
                  id={`verification-input-${index}`}
                  className="w-12 h-12 text-center border rounded-md mr-2"
                />
              ))}
            </div>
            <Button
              style={{
                height: "50px",
                width: "200px",
                marginTop: "20px",
              }}
              variant="primary"
              onClick={() => {}}
            >
              Verify
            </Button>
            <p className="small-text font-roboto text-grayish mt-5">
              Didn't receive the code? <a className="font-bold pl-1 text-primary-600" href="#">Resend</a>
            </p>
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