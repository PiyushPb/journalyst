"use client";

import {
  Flame,
  Lock,
  MoreVertical,
  Star,
  AlertTriangle,
  ArrowUp,
} from "lucide-react";

import SetupTag from "./SetupTag";

export default function SetupCard({
  title,
  winRate,
  reward,
  sampleSize,
  tags,
  highlight,
  icons,
}) {
  // ---- Dynamic Win Rate Color ----
  const winRateValue = Number(winRate.replace("%", ""));
  const winColor =
    winRateValue >= 65
      ? "text-[#63FF84]" // Green
      : winRateValue >= 55
      ? "text-[#FFD966]" // Yellow
      : "text-[#FF6B6B]"; // Red

  // ---- Dynamic Risk Reward Color ----
  const rewardNum = parseFloat(reward);
  const rrColor =
    rewardNum >= 2
      ? "text-[#63FF84]" // Green
      : rewardNum >= 1
      ? "text-[#FFD966]" // Yellow
      : "text-[#FF6B6B]"; // Red

  return (
    <div
      className={`
        w-full bg-gradient-to-b from-[#0F0F0F] to-[#161616]
        border border-[#2C2C2C]
        rounded-3xl p-6 flex flex-col gap-6
        transition-all duration-300
        hover:border-[#3B3B3B] hover:-translate-y-[2px]
        
      `}
    >
      {/* Title + Icons */}
      <div className="flex justify-between items-start">
        <h3 className="text-[20px] font-semibold text-white">{title}</h3>

        <div className="flex items-center gap-3 text-[#9A9A9A]">
          {icons?.fire && <Flame size={18} color="#49DE80" />}
          {icons?.arrowUp && <ArrowUp size={18} className="text-white" />}
          {icons?.star && <Star size={18} color="#FACC14" />}
          {icons?.warning && <AlertTriangle size={18} color="#FF6B6B" />}
          {icons?.lock && <Lock size={18} />}
          {icons?.menu && <MoreVertical size={18} />}
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((t, i) => (
          <SetupTag key={i} label={t} />
        ))}
      </div>

      {/* Stats */}
      <div className="flex flex-col gap-3 text-[15px] text-[#CFCFCF]">
        <div>
          Win Rate: <span className={`font-semibold ${winColor}`}>{winRate}</span>
        </div>

        <div>
          Risk Reward:{" "}
          <span className={`font-semibold ${rrColor}`}>{reward}</span>
        </div>

        <div>
          Sample Size:{" "}
          <span className="text-white font-semibold">{sampleSize} Trades</span>
        </div>
      </div>
    </div>
  );
}
