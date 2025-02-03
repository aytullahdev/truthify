import { tempData } from "../data";
import { FallacyCard } from "./falacy-card";

export const FallacyDetection = () => {
  return (
    <div className="w-full flex-1 pb-10">
      <h2 className="text-[#292929] font-semibold text-xl pb-2">
        Fallacy Detection
      </h2>
      <div className="w-full max-h-72  overflow-y-auto bg-white p-4 border rounded-lg">
        {tempData["FALLACY_DATA"].map((fallacy, index) => (
          <FallacyCard {...fallacy} key={index} />
        ))}
      </div>
    </div>
  );
};
