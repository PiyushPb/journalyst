import { StatCard } from "@/types/dashboard";

const statCards: StatCard[] = [
  {
    id: 1,
    title: "Today's Net P&L",
    description: "Total Increment in Profit",
    value: "+$8450.0",
    badge: {
      value: "8.45%",
    },
  },
  {
    id: 2,
    title: "Profit Factor",
    description: "from last session",
    value: "0.2",
    progress: {
      min: 0,
      max: 5,
      value: 1.8,
    },
  },
  {
    id: 3,
    title: "Win Rate",
    description: "From last session",
    value: "+12%",
    progress: {
      min: 0,
      max: 100,
      value: 65,
    },
  },
  {
    id: 4,
    title: "Risk Reward",
    description: "Growth last week",
    value: "0.5",
    progress: {
      min: 0,
      max: 5,
      value: 2.5,
    },
  },
  {
    id: 5,
    title: "Avg Win / Loss",
    description: "from last session",
    value: "0.4",
    progress: {
      min: 0,
      max: 5,
      value: 2.1,
    },
  },
];

export { statCards };
