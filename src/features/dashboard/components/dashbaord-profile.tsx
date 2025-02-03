import { tempData } from "../data";
import { DashboardProfile, ExecutiveProfileProps } from "./dashboard-profile";
import { ScoreCard } from "./score-card";

// AnalyticsDashboard.tsx
export default function AnalyticsDashboard() {
  const dashboardProfileData: ExecutiveProfileProps = {
    executive: tempData["EXECUTIVE_PROFILE_DATA"],
    rating: tempData["GAUGE_CHART_DATA"],
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
        {tempData["CARD_DATA"].map((card) => (
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
