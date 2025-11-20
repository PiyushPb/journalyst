import React from "react";
import StatCardsContainer from "@/components/app/dashboard/components/StatCardsContainer";
import ChartsSection from "@/components/app/dashboard/components/ChartsSection";
import RecentTradesSection from "@/components/app/dashboard/components/RecentTradesSection";

function page() {
  return (
    <main className="flex flex-col gap-5">
      <StatCardsContainer />
      <ChartsSection />
      <RecentTradesSection />
    </main>
  );
}

export default page;
