import React from "react";
import DailyNetPLChart from "../ui/DailyNetPLChart";
import EquityGrowthCurveChart from "../ui/EquityGrowthCurveChart";

function ChartsSection() {
  return (
    <section className="flex flex-row gap-5 w-full">
      <DailyNetPLChart />
      <EquityGrowthCurveChart />
    </section>
  );
}

export default ChartsSection;
