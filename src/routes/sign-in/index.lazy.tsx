import { createLazyFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { BottomFooter } from "@/components/bottom-footer";
import { SignInForm } from "@/features/auth/components/signin-form";

export const Route = createLazyFileRoute("/sign-in/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#002443] ">
      <div className=" max-h-screen  flex flex-col items-center overflow-y-auto ">
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

          <div className="w-full lg:min-w-[500px] py-5 overflow-y-auto">
            <h2 className="text-white font-semibold text-2xl py-5">
              Login to your account
            </h2>
            <SignInForm />
          </div>

          <div>
            <p className="text-white text-sm text-center">
              Don't have an account?{" "}
              <Link
                to="/sign-up"
                className="text-[#069AEE] pl-l font-medium text-base  "
              >
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
      <BottomFooter className="bg-[#002443]" />
    </div>
  );
}
