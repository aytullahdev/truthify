import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const CARD_DATA = [
  {
    title: "Positive Attributes",
    description: "Aliquam porta nisi sodales nunc pellentesque...",
    score: 8.2,
  },
  {
    title: "Negative Attributes",
    description: "Sed ut eros et orci finibus finibus...",
    score: -2.0,
  },
];
export default function AnalyticsDashboard() {
  return (
    <div className="w-full max-w-3xl mx-auto p-4 space-y-6">
      {/* Score Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {CARD_DATA.map((card) => (
          <ScoreCard
            key={card.title}
            title={card.title}
            description={card.description}
            score={card.score}
          />
        ))}
      </div>

      {/* Fallacy Detection */}
      <ScoreCard
        title="Fallacy Detection"
        description="Sed ut eros et orci finibus finibus..."
        score={-2.0}
        scoreRight={true}
      />
    </div>
  );
}

export const ScoreCard = ({
  title,
  description,
  score,
  scoreRight = false,
}: {
  title: string;
  description: string;
  score: number;
  scoreRight?: boolean;
}) => {
  return (
    <div className="bg-gradient-to-r from-[#F1F6FA] to-[#FFFFFF] p-3 border shadow-sm rounded-lg ">
      <div className="text-lg font-semibold text-[#292929]">{title}</div>

      <div
        className={cn(
          "space-y-2 h-full ",
          scoreRight ? "flex flex-row justify-between p-2 text-center " : ""
        )}
      >
        <div className="flex space-y-1 flex-col order-2  ">
          <span
            className={cn(
              "text-2xl text-[#38A737] font-extrabold ",
              score <= 3 && "text-[#EC3232]"
            )}
          >
            {score}
          </span>
          <span className="text-sm font-medium text-muted-foreground">
            Total Score
          </span>
        </div>
        <div className="flex flex-col  items-start overflow-hidden">
          <p className="text-sm text-muted-foreground font-normal truncate ">
            {description}
          </p>
          <div>
            <Button
              variant="outline"
              size="sm"
              className=" mt-2 bg-[#069AEE] text-white "
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export const DashboardProfile = () => {};
