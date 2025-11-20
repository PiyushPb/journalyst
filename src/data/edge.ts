import { PlannerSection } from "@/types/edge";

export const plannerSections: PlannerSection[] = [
  {
    id: 1,
    title: "Pre - Market Plan",
    content:
      "TSLA holding support near 188, strong pre-market momentum. Watching for breakout above 190.50 with volume confirmation. Potential scalp toward 193. Need to avoid early entries before confirmation above VWAP.",
      chart: "/assets/edge/chart1.png",
   
    tradeData: {
      ticker: "TESLA",
      direction: "Buy",
      entry: "319.91",
      stopLoss: "308.06",
      takeProfit: "356.06",
      quantity: "50",
    },
    
  },
  {
    id: 2,
    title: "In - Market Notes",
    content:
      "TSLA broke above VWAP with strong volume around 10:10 AM. Waited for a clean retest and entered on strength. The price moved steadily toward the target. Used a trailing stop which secured partial profits before the final resistance zone hit.",
    labels: ["Disciplined", "Relief", "Focused", "ExecutionConfidence", "SlightAnxiety"],
  },
  {
    id: 3,
    title: "Post - Market Review",
    content:
      `Executed plan as intended. Waited for confirmation above VWAP, scaled out as price approached resistance. Could’ve entered with more size, but happy with patience and clean exit. 
      
      Felt slight anxiety before entry but managed emotions well. No FOMO. Gained confidence from sticking to strategy.`,

    chart: "/assets/edge/chart1.png",
  },

];
