import { Link } from "@tanstack/react-router";
import { SignInForm } from "./signin-form";

export const SignInPage = () => {
  return (
    <div className="min-h-screen max-h-screen bg-[#002443] flex flex-col items-center  ">
      <div className="max-w-xl flex flex-col justify-around space-y-10 ">
        <div className="py-10">
          <img src="truthify_logo.png" alt="logo" />
        </div>
        <div>
          <Link to="/">
            <p className="text-base font-medium  border-b-[1px] inline-block text-white">
              Back to homepage
            </p>
          </Link>
        </div>

        <div>
          <h2 className="text-white font-semibold text-4xl py-5">
            Login to your account
          </h2>
          <SignInForm />
        </div>
      </div>
    </div>
  );
};
