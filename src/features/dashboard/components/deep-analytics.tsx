import { FallacyDetection } from "./fallacy-detection";
import { PositiveAttributes } from "./positive-attributes";

export const DeepAnalytics = () => {
  return (
    <div className="flex flex-col  gap-5 overflow-y-auto justify-between h-full">
      <PositiveAttributes />
      <FallacyDetection />
    </div>
  );
};
