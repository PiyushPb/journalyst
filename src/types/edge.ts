export interface TradeData {
  ticker: string;
  direction: "Buy" | "Sell";
  entry: string;
  stopLoss: string;
  takeProfit: string;
  quantity: string;
}

export interface PlannerSection {
  id: number;
  title: string;
  content: string;
  chart?: string;
  tradeData?: TradeData;
  labels?: string[];
}
