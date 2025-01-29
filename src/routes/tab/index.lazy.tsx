import Layout from "@/components/layout";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/tab/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Layout>
      <p>Tabs</p>
    </Layout>
  );
}
