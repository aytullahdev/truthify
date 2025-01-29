import Layout from "@/components/layout";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/make-your-own/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Layout>
      <p>Make your own</p>
    </Layout>
  );
}
