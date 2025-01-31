import { ComparativeAnalysis } from "./comparative-analysis";
import { IntegrityToPrice } from "./integrity-to-price";

export const DeepAnalytics = () => {
  return (
    <div className="flex flex-col gap-5 overflow-y-auto">
      <IntegrityToPrice />
      <ComparativeAnalysis />
    </div>
  );
};
