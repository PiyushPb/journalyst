"use client";

import React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

function generateEquityData(
  startValue = 100000,
  months = 12,
  pointsPerMonth = 10,
  volatility = 0.03,
  drift = 0.01
) {
  const data: { date: string; equity: number }[] = [];
  let value = startValue;
  const startDate = new Date(2024, 0, 1);
  const totalPoints = months * pointsPerMonth;

  for (let i = 0; i < totalPoints; i++) {
    const randomChange = (Math.random() - 0.5) * volatility + drift;
    value = Math.max(value * (1 + randomChange), 0);
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + (i * 30) / pointsPerMonth);

    data.push({
      date: date.toISOString().slice(0, 10),
      equity: Math.round(value),
    });
  }

  return data;
}

const chartData = generateEquityData(100000, 12, 10);

const chartConfig = {
  equity: {
    label: "Equity Value",
    color: "var(--green)",
  },
} satisfies ChartConfig;

function EquityGrowthCurveChart() {
  return (
    <div className="card w-full flex flex-col gap-5">
      <div className="mb-5">
        <h3>Equity Growth Curve</h3>
      </div>
      <div>
        <ChartContainer config={chartConfig} className="max-h-[280px] w-full">
          <AreaChart data={chartData} margin={{ left: 0, right: 12 }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(5)} // MM-DD
            />
            {/* ✅ Simplified Y-axis labels */}
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`} // Example: 120K
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="equity"
              type="natural"
              fill="var(--color-equity)"
              fillOpacity={0.4}
              stroke="var(--color-equity)"
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  );
}

export default EquityGrowthCurveChart;