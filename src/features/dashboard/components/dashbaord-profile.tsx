import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useDashboardContext } from "../hooks/use-dashbaord-context";
import DynamicLineGauge from "./profil-gauge-chart";
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

// AnalyticsDashboard.tsx
export default function AnalyticsDashboard() {
  return (
    <div className="w-full max-w-3xl mx-auto p-4 space-y-6">
      {/* Profile */}
      <DashboardProfile />
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

// ScoreCard.tsx
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

// DashboardProfile.tsx
export const DashboardProfile = () => {
  return (
    <div className="w-full  flex flex-col">
      {/* Analytic Buttons */}
      <AnalyticButtons />

      {/* Executive Profile */}
      <ExecutiveProfile
        name="Satya Nadella"
        role="CEO, Microsoft"
        companyLogo="microsoft.png"
        profileImage="satynadella.png"
      />

      {/* Gauge char */}
      <DynamicLineGauge
        value={7.8}
        maxValue={10}
        title="Total Integrity Score"
        caption="Aliquam porta orci sodales nunc pellentesque, sed aliquam justo tincidunt. Ut sit amet congue lorem raesent imperdiet tortor ac dolor."
      />
    </div>
  );
};

// AnalyticButtons.tsx
export const AnalyticButtons = () => {
  const { showDeepAnalytics, setShowDeepAnalytics } = useDashboardContext();
  return (
    <div className="mx-auto bg-[#F1F1F1] p-1 rounded-lg space-x-4">
      <button
        onClick={() => setShowDeepAnalytics(false)}
        className={cn(
          "text-base font-normal px-2 rounded-lg py-1  shadow-xs  text-[#292929] ",
          !showDeepAnalytics && "bg-[#016CCD] text-white border"
        )}
      >
        Executive Scores
      </button>
      <button
        className={cn(
          "text-base font-normal px-2 rounded-lg py-1  shadow-xs  text-[#292929] ",
          showDeepAnalytics && "bg-[#016CCD] text-white border"
        )}
        onClick={() => setShowDeepAnalytics(true)}
      >
        Deep Analysis
      </button>
    </div>
  );
};

// ExecutiveProfile.tsx
export const ExecutiveProfile = ({
  name,
  role,
  companyLogo,
  profileImage,
}: {
  name: string;
  role: string;
  companyLogo: string;
  profileImage: string;
}) => {
  return (
    <div className="flex flex-row justify-between items-center pt-10">
      <div className="flex flex-row  space-x-5 items-center">
        <img
          src={profileImage}
          alt="profile"
          className="w-24 h-24 rounded-full"
        />
        <div>
          <p className="text-lg font-semibold text-[#292929]">{name}</p>
          <p className="text-sm text-[#292929]/60">{role}</p>
        </div>
      </div>
      <div>
        <img src={companyLogo} alt="microsoft" className="w-12 h-12" />
      </div>
    </div>
  );
};
