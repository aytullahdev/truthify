import { cn } from "@/lib/utils";
import { useDashboardContext } from "../hooks/use-dashbaord-context";

// AnalyticButtons.tsx
export const AnalyticButtons = () => {
  const { showDeepAnalytics, setShowDeepAnalytics } = useDashboardContext();
  return (
    <div className="mx-auto bg-[#F1F1F1] p-1 rounded-lg space-x-4">
      <button
        onClick={() => setShowDeepAnalytics(false)}
        className={cn(
          "text-base font-normal px-2 rounded-lg py-1  shadow-xs  text-[#292929] ",
          !showDeepAnalytics && "bg-[#016CCD] text-white border"
        )}
      >
        Executive Scores
      </button>
      <button
        className={cn(
          "text-base font-normal px-2 rounded-lg py-1  shadow-xs  text-[#292929] ",
          showDeepAnalytics && "bg-[#016CCD] text-white border"
        )}
        onClick={() => setShowDeepAnalytics(true)}
      >
        Deep Analysis
      </button>
    </div>
  );
};
