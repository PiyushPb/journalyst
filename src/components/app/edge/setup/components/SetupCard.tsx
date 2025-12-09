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
  icons,
}) {
  // ---- Dynamic Win Rate Color ----
  const winRateValue = Number(winRate.replace("%", ""));
  const winColor =
    winRateValue >= 65
      ? "text-[#63FF84]"
      : winRateValue >= 55
      ? "text-[#FFD966]"
      : "text-[#FF6B6B]";

  // ---- Dynamic Risk Reward Color ----
  const rewardNum = parseFloat(reward);
  const rrColor =
    rewardNum >= 2
      ? "text-[#63FF84]"
      : rewardNum >= 1
      ? "text-[#FFD966]"
      : "text-[#FF6B6B]";

  return (
    <div
      className="
        w-full
        bg-gradient-to-b from-[#0F0F0F] to-[#161616]
        border border-[#2A2A2A]
        rounded-[20px]
        p-[24px]
        flex flex-col
        gap-4
        transition-all duration-300
        hover:border-[#3A3A3A]
        hover:-translate-y-[2px]
      "
    >
      {/* TITLE + ICONS */}
      <div className="flex justify-between items-start">
        <h3 className="text-[20px] font-semibold leading-none text-white">
          {title}
        </h3>

        <div className="flex items-center gap-3 text-[#9A9A9A]">
          {icons?.fire && <Flame size={18} color="#49DE80" />}
          {icons?.arrowUp && <ArrowUp size={18} className="text-white" />}
          {icons?.star && <Star size={18} color="#FACC14" />}
          {icons?.warning && <AlertTriangle size={18} color="#FF6B6B" />}
          {icons?.lock && <Lock size={18} />}
          {icons?.menu && <MoreVertical size={18} />}
        </div>
      </div>

      {/* TAGS */}
      <div className="flex flex-wrap gap-[8px]">
        {tags.map((t, i) => (
          <SetupTag key={i} label={t} />
        ))}
      </div>

      {/* STATS */}
      <div className="flex flex-col gap-3 text-[16px] text-[#CFCFCF]">
        {/* Win Rate */}
        <div className="flex items-center gap-2">
          <span>Win Rate:</span>
          <span className={`font-bold text-[24px] leading-[120%] ${winColor}`}>
            {winRate}
          </span>
        </div>

        {/* Risk Reward */}
        <div className="flex items-center gap-2">
          <span>Risk Reward:</span>
          <span className={`font-bold text-[24px] leading-[120%] ${rrColor}`}>
            {reward}
          </span>
        </div>

        {/* Sample Size */}
        <div className="flex items-center gap-2">
          <span>Sample Size:</span>
          <span className="text-white font-semibold text-[20px] leading-[120%]">
            {sampleSize} Trades
          </span>
        </div>
      </div>
    </div>
  );
}
