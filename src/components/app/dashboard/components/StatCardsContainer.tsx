import React from "react";
import StatsCard, { ProgressRing, StatBadge } from "../ui/StatsCard";
import { statCards } from "@/data/dashboard";

function StatCardsContainer() {
  return (
    <div className="flex flex-row gap-5">
      {statCards.map((card) => (
        <StatsCard key={card.id}>
          {card.badge && <StatBadge value={card.badge.value} />}
          {card.progress && (
            <ProgressRing
              value={card.progress.value}
              min={card.progress.min}
              max={card.progress.max}
            />
          )}
        </StatsCard>
      ))}
    </div>
  );
}

export default StatCardsContainer;
