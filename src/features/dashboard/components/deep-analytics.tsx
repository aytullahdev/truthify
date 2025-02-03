import {
  ComparativeAnalysis,
  ComparativeAnalysisProps,
} from "./comparative-analysis";
import { IntegrityToPrice } from "./integrity-to-price";
const COMP_DATA: ComparativeAnalysisProps = {
  position: 6,
  imgSrc: "satynadella.png",
  name: "Satya Nadella",
};
export const DeepAnalytics = () => {
  return (
    <div className="flex flex-col gap-5 overflow-y-auto">
      <IntegrityToPrice />
      <ComparativeAnalysis {...COMP_DATA} />
    </div>
  );
};
