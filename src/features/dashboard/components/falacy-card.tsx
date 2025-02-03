import { Button } from "@/components/ui/button";
import { ScoreDisplay, VideoThumbnail } from "./score-display";
import { FallacyTags } from "./flacy-tags";

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
