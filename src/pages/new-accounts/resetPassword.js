import Button from "../../components/button/buttons";
import InputField from "../../components/input_fields/input_fields";
import mainImage1 from "../../assets/images/account-creation-login/main-image1.png";
import { ReactComponent as Logo } from "../../assets/images/logo/logo1.svg";
import "./signUp.css";
const ResetPassword = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle the reset password submission
  };

  return (
    
    <div className="flex  items-center justify-center  md:justify-between p-8 md:p-32 max-w-[1450px] mx-auto">
      <div className="absolute md:static block md:flex h-screen inset-0 m-auto  items-center p-5 max-w-full w-[350px] md:w-[450px]  max-h-[500px] md:pr-24">
          <div >
          <Logo className=" w-48 md:w-32 md:mb-4 mx-auto block md:mx-0" />
          <h1 className="text-center md:text-left font-roboto h4 md:h2 !tracking-normal">Reset Password</h1>
          <div className=" w-full text-center md:text-left small-text font-roboto text-grayish mt-2 md:mt-5 mb-7 md:mb-10 ">
            Please enter the email address you registered with to receive password reset information.
          </div>
          <form onSubmit={handleSubmit}>

            <InputField
              label="Email Address"
              type="email"
              placeholder="example@domain.com"
              className="bg-grayLighter"
              style={{
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              // backgroundColor:"#F1F1F1"
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
          <p className="text-center md:text-left small-text font-roboto mt-2 md:mt-4 !tracking-normal">
            Already have a Zinio account? <a href="/signin" className="small-text-bold font-roboto text-primary-600">Sign in</a>
          </p>
        </div>

            </div>
       
        <div className="hidden md:block md:w-1/2  justify-center">
          <img src={mainImage1} alt="Collage of happy people" className="rounded-lg" />
        </div>
      </div>
     
  );
};

export default ResetPassword;