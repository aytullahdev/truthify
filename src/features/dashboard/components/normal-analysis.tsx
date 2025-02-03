import { tempData } from "../data";
import { ComparativeAnalysis } from "./comparative-analysis";
import { IntegrityToPrice } from "./integrity-to-price";

export const NormalAnalysis = () => {
  return (
    <div className="flex flex-col gap-5 overflow-y-auto">
      <IntegrityToPrice />
      <ComparativeAnalysis {...tempData["NORMAL_ANALYSIS_DATA"]} />
    </div>
  );
};
