import React from "react";
import RecentTradeTable from "../ui/RecentTradeTable";
import RecentTradeCalendar from "../ui/RecentTradeCalendar";

function RecentTradesSection() {
  return (
    <div className="w-full flex flex-row gap-5">
      <RecentTradeTable />
      <RecentTradeCalendar />
    </div>
  );
}

export default RecentTradesSection;
