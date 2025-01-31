import { createLazyFileRoute } from "@tanstack/react-router";
import Layout from "../../components/layout";
import AnalyticsDashboard from "@/features/dashboard/components/dashbaord-profile";
import { useDashboardContext } from "@/features/dashboard/hooks/use-dashbaord-context";
import { DeepAnalytics } from "@/features/dashboard/components/deep-analytics";

export const Route = createLazyFileRoute("/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { showDeepAnalytics } = useDashboardContext();
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row gap-2 w-full h-full max-h-[calc(100vh-70px)] max-w-full  overflow-y-auto bg-white">
        <div className="flex lg:w-5/12 flex-col max-h-[calc(100vh-70px)] ">
          {/*left profile card */}
          <AnalyticsDashboard />
        </div>
        <div className=" lg:w-7/12 bg-[#F5F8FB] flex flex-col gap-10 p-5 max-h-[calc(100vh-70px)] overflow-y-auto">
          {/* right card */}
          {showDeepAnalytics && (
            <div className="p-2">
              {/* deep analytics */}
              Deep Analytics
            </div>
          )}

          {!showDeepAnalytics && (
            <div className="p-2">
              {/* normal analytics */}
              <DeepAnalytics />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
