import React from "react";
import Card from "@/components/ui/card";
import StatCardsContainer from "@/components/app/dashboard/components/StatCardsContainer";
import ChartsSection from "@/components/app/dashboard/components/ChartsSection";

function page() {
  return (
    <main className="flex flex-col gap-5">
      <StatCardsContainer />
      <ChartsSection />
    </main>
  );
}

export default page;
