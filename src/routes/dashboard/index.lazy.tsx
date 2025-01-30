import { createLazyFileRoute } from "@tanstack/react-router";
import Layout from "../../components/layout";
import { useState } from "react";
import AnalyticsDashboard from "@/features/dashboard/components/dashbaord-profile";

export const Route = createLazyFileRoute("/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [showDeepAnalytics, setShowDeepAnalytics] = useState<boolean>(false);
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row gap-2 w-full h-full  max-h-full max-w-full  overflow-y-auto bg-white">
        <div className="flex lg:w-5/12 flex-col h-full">
          {/*left profile card */}
          <AnalyticsDashboard />
        </div>
        <div className=" lg:w-7/12 bg-[#F5F8FB] flex flex-col gap-10 p-5">
          {/* right card */}
          {showDeepAnalytics && (
            <div className="p-2">{/* deep analytics */}</div>
          )}

          {!showDeepAnalytics && (
            <div className="p-2">{/* normal analytics */}</div>
          )}
        </div>
      </div>
    </Layout>
  );
}
