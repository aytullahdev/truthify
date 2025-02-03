import { DashboardProfile, ExecutiveProfileProps } from "./dashboard-profile";
import { ScoreCard } from "./score-card";

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

const EXECUTIVE_PROFILE_DATA = {
  name: "Satya Nadella",
  role: "CEO, Microsoft",
  companyLogo: "microsoft.png",
  profileImage: "satynadella.png",
};

const GAUGE_CHART_DATA = {
  value: 7.8,
  maxValue: 10,
  title: "Total Integrity Score",
  caption:
    "Aliquam porta orci sodales nunc pellentesque, sed aliquam justo tincidunt. Ut sit amet congue lorem raesent imperdiet tortor ac dolor.",
};

// AnalyticsDashboard.tsx
export default function AnalyticsDashboard() {
  const dashboardProfileData: ExecutiveProfileProps = {
    executive: EXECUTIVE_PROFILE_DATA,
    rating: GAUGE_CHART_DATA,
  };
  return (
    <div
      className="w-full max-w-3xl mx-auto p-4 space-y-6 overflow-y-auto scroll-smooth"
      style={{
        scrollbarWidth: "thin",
      }}
    >
      {/* Profile */}
      <DashboardProfile {...dashboardProfileData} />
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
