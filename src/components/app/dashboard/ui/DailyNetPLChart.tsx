"use client";

import React from "react";
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
} satisfies ChartConfig;

const chartData = [
  { day: "Monday", visitors: 186 },
  { day: "Tuesday", visitors: 205 },
  { day: "Wednesday", visitors: -207 },
  { day: "Thursday", visitors: 173 },
  { day: "Friday", visitors: -209 },
  { day: "Saturday", visitors: 214 },
];

function DailyNetPLChart() {
  return (
    <div className="w-full max-w-[35%] card flex flex-col gap-5">
      <div>
        <h3>Daily Net P&L</h3>
      </div>
      <div>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{ top: 20, bottom: 20, left: -20 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="day" axisLine={false} tickLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel hideIndicator />}
            />
            <Bar dataKey="visitors">
              {chartData.map((item) => (
                <Cell
                  key={item.day}
                  fill={item.visitors > 0 ? "var(--green)" : "var(--red)"}
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
}

export default DailyNetPLChart;
