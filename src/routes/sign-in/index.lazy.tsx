import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useSession } from "@/features/auth/hooks/useSession";
import { SignInPage } from "@/features/auth/components/signin";

export const Route = createLazyFileRoute("/sign-in/")({
  component: RouteComponent,
});

function RouteComponent() {
  const session = useSession();

  if (session.session?.access_token) {
    return (
      <div className="min-h-screen min-w-full flex justify-center items-center">
        <div className="flex flex-row gap-2">
          <p>Already signed in go to</p>
          <Link to="/dashboard" className="font-bold underline">
            Dashboard
          </Link>
        </div>
      </div>
    );
  }
  return <SignInPage />;
}
