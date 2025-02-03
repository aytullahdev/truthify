import { ComparativeAnalysis } from "./comparative-analysis";
import { IntegrityToPrice } from "./integrity-to-price";
const NORMAL_ANALYSIS_DATA = {
  position: 6,
  imgSrc: "satynadella.png",
  name: "Satya Nadella",
};
export const NormalAnalysis = () => {
  return (
    <div className="flex flex-col gap-5 overflow-y-auto">
      <IntegrityToPrice />
      <ComparativeAnalysis {...NORMAL_ANALYSIS_DATA} />
    </div>
  );
};
