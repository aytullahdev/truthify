import { createLazyFileRoute } from "@tanstack/react-router";
import Layout from "../../components/layout";
import AnalyticsDashboard from "@/features/dashboard/components/dashbaord-profile";
import { useDashboardContext } from "@/features/dashboard/hooks/use-dashbaord-context";
import { DeepAnalytics } from "@/features/dashboard/components/deep-analytics";
import { NormalAnalysis } from "@/features/dashboard/components/normal-analysis";

export const Route = createLazyFileRoute("/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { showDeepAnalytics } = useDashboardContext();
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row gap-2 w-full h-full lg:max-h-[calc(100vh-70px)] max-w-full  overflow-y-auto bg-white">
        <div className="flex lg:w-5/12 flex-col lg:max-h-[calc(100vh-70px)] ">
          {/*left profile card */}
          <AnalyticsDashboard />
        </div>
        <div className=" lg:w-7/12 bg-[#F5F8FB] flex flex-col lg:gap-10 lg:p-5 lg:max-h-[calc(100vh-70px)] overflow-y-auto">
          {/* right card */}
          {!showDeepAnalytics && (
            <div className="p-2">
              {/* normal analytics */}
              <NormalAnalysis />
            </div>
          )}

          {showDeepAnalytics && (
            <div className="p-2">
              {/* deep analytics */}

              <DeepAnalytics />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
