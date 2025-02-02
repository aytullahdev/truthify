import { BottomFooter } from "@/components/bottom-footer";
import { SignupForm } from "@/features/auth/components/signup-form";
import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/sign-up/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#002443]">
      <div className=" max-h-screen  flex flex-col items-center  ">
        <div className="max-w-xl lg:min-w-xl flex flex-col justify-around space-y-10 ">
          <div className="py-10">
            <img src="truthify_logo.png" alt="logo" />
          </div>
          <div>
            <Link to="/">
              <p className="text-base font-normal  border-b-[1px] inline-block text-white">
                Back to homepage
              </p>
            </Link>
          </div>

          <div className="w-full lg:min-w-[500px] py-5">
            <h2 className="text-white font-medium text-2xl py-5">
              Create an account
            </h2>
            <SignupForm />
          </div>

          <div>
            <p className="text-white text-sm text-center">
              Already have an account?{" "}
              <Link
                to="/sign-in"
                className="text-[#069AEE] pl-l font-medium text-base  "
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      <BottomFooter className="bg-[#002443]" />
    </div>
  );
}
