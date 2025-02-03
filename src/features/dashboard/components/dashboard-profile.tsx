import { ExecutiveProfileType } from "../types";
import { AnalyticButtons } from "./analytics-button";
import { ExecutiveProfile } from "./executive-profile";
import DynamicLineGauge from "./profil-gauge-chart";

export interface ExecutiveProfileProps {
  executive: ExecutiveProfileType;
  rating: {
    value: number;
    maxValue: number;
    title: string;
    caption: string;
  };
}
// DashboardProfile.tsx
export const DashboardProfile = ({
  executive,
  rating,
}: ExecutiveProfileProps) => {
  return (
    <div className="w-full  flex flex-col">
      {/* Analytic Buttons */}
      <AnalyticButtons />

      {/* Executive Profile */}
      <ExecutiveProfile {...executive} />

      {/* Gauge char */}
      <DynamicLineGauge {...rating} />
    </div>
  );
};
