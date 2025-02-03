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
