import { Button } from "@/components/ui/button";

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

interface FallacyCardProps {
  title: string;
  date: string;
  fallacyCount: number;
  fallacies: { name: string }[];
  score: number;
}

export function FallacyCard({
  title,
  date,
  fallacyCount,
  fallacies,
  score,
}: FallacyCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 flex gap-4">
      <VideoThumbnail />

      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-gray-900">{title}</h3>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
          <ScoreDisplay score={score} />
        </div>

        <div className="mt-0">
          <p className="text-sm text-gray-700 mb-2">
            Conclusion and Number of Fallacies: {fallacyCount}
          </p>
          <p className="text-sm text-gray-700 mb-2">
            {fallacyCount} logical fallacies. They include:
          </p>
          <FallacyTags fallacies={fallacies} />
        </div>

        <Button variant="link" className="text-sm mt-2 px-0">
          Less Details
        </Button>
      </div>
    </div>
  );
}

interface FallacyTag {
  name: string;
}

interface FallacyTagsProps {
  fallacies: FallacyTag[];
}

export function FallacyTags({ fallacies }: FallacyTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {fallacies.map((fallacy, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg"
        >
          {fallacy.name}
        </span>
      ))}
    </div>
  );
}

interface ScoreDisplayProps {
  score: number;
}

export function ScoreDisplay({ score }: ScoreDisplayProps) {
  const scoreColor = score < 0 ? "text-red-500" : "text-[#38A737]";
  const bgColor = score < 0 ? "bg-[#E04545]/10" : "bg-[#E7FAFF]";

  return (
    <div
      className={`text-3xl font-bold ${scoreColor} ${bgColor} p-5 rounded-lg`}
    >
      {score > 0 ? `+${score}` : score}
    </div>
  );
}

export function VideoThumbnail() {
  return (
    <div className="relative h-24 w-32 bg-gray-200 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="">
          <img src="youtube.svg" className=" text-white" />
        </div>
      </div>
    </div>
  );
}

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
