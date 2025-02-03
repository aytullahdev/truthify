import { FallacyCard } from "./falacy-card";

export const FallacyDetection = () => {
  return (
    <div className="w-full flex-1 pb-10">
      <h2 className="text-[#292929] font-semibold text-xl pb-2">
        Fallacy Detection
      </h2>
      <div className="w-full max-h-72  overflow-y-auto bg-white p-4 border rounded-lg">
        {FALLACY_DATA.map((fallacy, index) => (
          <FallacyCard {...fallacy} key={index} />
        ))}
      </div>
    </div>
  );
};

const FALLACY_DATA = [
  {
    title:
      "Interview : Integer sagittis tempus diam at aliquet. roin et purus eu turpis suscipit",
    date: "13 April 2024",
    fallacyCount: 4,
    fallacies: [
      { name: "Argument from Authority" },
      { name: "False Dilemma" },
      { name: "Hasty Generalization" },
      { name: "Appeal to Emotion" },
    ],
    score: -2,
  },
  {
    title:
      "Interview : Integer sagittis tempus diam at aliquet. roin et purus eu turpis suscipit",
    date: "13 April 2024",
    fallacyCount: 4,
    fallacies: [
      { name: "Argument from Authority" },
      { name: "False Dilemma" },
      { name: "Hasty Generalization" },
      { name: "Appeal to Emotion" },
    ],
    score: 5,
  },
];
