// @/data/recentTrade.ts
import { RecentTradeTable } from "@/types/dashboard";

export const recentTrades: RecentTradeTable[] = [
  // 29.06.2025 buys
  { id: 1, closeDate: "29.06.2025", symbol: "MES", side: "Buy", netPnl: 3400 },
  { id: 2, closeDate: "29.06.2025", symbol: "MES", side: "Buy", netPnl: 3400 },
  { id: 3, closeDate: "29.06.2025", symbol: "MES", side: "Buy", netPnl: 3400 },
  { id: 4, closeDate: "29.06.2025", symbol: "MES", side: "Buy", netPnl: 3400 },
  { id: 5, closeDate: "29.06.2025", symbol: "MES", side: "Buy", netPnl: 3400 },
  { id: 6, closeDate: "29.06.2025", symbol: "MES", side: "Buy", netPnl: 3400 },

  // 28.06.2025 sells
  {
    id: 7,
    closeDate: "28.06.2025",
    symbol: "MES",
    side: "Sell",
    netPnl: -3400,
  },
  {
    id: 8,
    closeDate: "28.06.2025",
    symbol: "MES",
    side: "Sell",
    netPnl: -3400,
  },
  {
    id: 9,
    closeDate: "28.06.2025",
    symbol: "MES",
    side: "Sell",
    netPnl: -3400,
  },
  {
    id: 10,
    closeDate: "28.06.2025",
    symbol: "MES",
    side: "Sell",
    netPnl: -3400,
  },
  {
    id: 11,
    closeDate: "28.06.2025",
    symbol: "MES",
    side: "Sell",
    netPnl: -3400,
  },
  {
    id: 12,
    closeDate: "28.06.2025",
    symbol: "MES",
    side: "Sell",
    netPnl: -3400,
  },
];

export default recentTrades;
