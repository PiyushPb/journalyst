import React from "react";
import DailyPlanner from "@/components/app/edge/components/DailyPlanner";

function page() {
  return (
    <section className="flex flex-col gap-5 w-full">
      <DailyPlanner />
    </section>
  );
}

export default page;
