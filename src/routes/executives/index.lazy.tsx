import Layout from "@/components/layout";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/executives/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Layout>
      <p>Exectives</p>
    </Layout>
  );
}
