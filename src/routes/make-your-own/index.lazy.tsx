import Layout from "@/components/layout";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/make-your-own/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Layout>
      <div className="w-full h-full justify-center items-center flex">
        <p className="font-bold text-xl uppercase">Not available yet</p>
      </div>
    </Layout>
  );
}
