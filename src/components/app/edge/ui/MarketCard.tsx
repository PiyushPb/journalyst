"use client";
import React from "react";
import LabelBadge from "./LabelBadge";
import TradeCard from "./TradeCard";
import CardHeader from "./CardHeader";

interface MarketCardProps {
  title: string;
  content: string;
  chart?: string;
  tradeData?: {
    ticker: string;
    entry: string;
    stopLoss: string;
    takeProfit: string;
    quantity: string;
    direction?: "Buy" | "Sell";
  };
  labels?: string[];
}

export default function MarketCard({
  title,
  content,
  chart,
  tradeData,
  labels,
}: MarketCardProps) {
  return (
    <div
      className="
        w-full
        bg-gradient-to-b from-[#0F0F0F] to-[#14151C]
        border border-[#343434]/60
        rounded-2xl
        p-6 md:p-10
        flex flex-col lg:flex-row
        justify-between
        gap-8 lg:gap-12
        transition-all duration-300
      "
    >
      {/* LEFT SECTION */}
      <div className="flex flex-col gap-5 flex-1 min-w-0">
        <CardHeader title={title} />

        <p className="text-sm text-[#B0B0B0] leading-relaxed max-w-[880px] whitespace-pre-line">
          {content}
        </p>

        {tradeData && <TradeCard {...tradeData} />}
      </div>

      {/* RIGHT SECTION */}
      <div className="flex flex-col gap-6 items-start lg:items-end w-[380px] lg:w-[420px] flex-shrink-0">
        {/* LABELS */}
        {labels && labels.length > 0 && (
          <div className="flex flex-col items-start w-full gap-3 mt-1">
            <p className="text-[20px] font-medium leading-none tracking-[0.02em] text-[#A1A1A1]">
              Labels
            </p>

            <div className="flex flex-wrap justify-start gap-x-3 gap-y-2 w-full">
              {labels.map((label, idx) => (
                <LabelBadge key={idx} label={label} />
              ))}
            </div>
          </div>
        )}

        {/* CHART */}
        {/* CHART IMAGE */}
        {chart && (
          <div className="w-full flex justify-end mt-4 lg:mt-8">
            <div
              className="
        bg-[#0D0D0D]
        border border-[#2A2A2A]
        rounded-2xl
        w-[360px] lg:w-[420px]
        h-[240px]
        overflow-hidden
        shadow-[0_0_20px_rgba(0,0,0,0.35)]
      "
            >
              <img
                src={chart}
                alt="Chart"
                className="
          w-full h-full
          object-cover
          rounded-2xl
        "
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
