/* eslint-disable @next/next/no-img-element */
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
        card w-full mx-auto
        flex flex-col lg:flex-row
        justify-between
        items-start
        gap-8
        py-8 px-8
       bg-gradient-to-b from-[#0F0F0F] to-[#14151C]
       border border-[#343434]/60
       rounded-[24px]
       transition-all duration-300
      "
    >
      <div className="flex flex-col gap-4 flex-1 min-w-0">
        {/* Header */}
        <CardHeader title={title} />

        {/* Description */}
        <p className="text-sm text-[#B0B0B0] leading-relaxed max-w-[680px] whitespace-pre-line">
          {content}
        </p>

        {/* Trade Card */}
        {tradeData && <TradeCard {...tradeData} />}
      </div>

      <div
        className="
          flex flex-col gap-5
          items-start lg:items-end
          min-w-[340px] max-w-[380px]
          flex-shrink-0
        "
      >
        {/* LABELS */}
        {labels && labels.length > 0 && (
          <div
            className="
      flex flex-col
      items-start
      w-[320px]
      gap-[14px]
      mt-[6px]
    "
          >
            {/* Heading */}
            <p
              className="text-[20px] font-medium leading-none tracking-[0.02em]"
              style={{ color: "#A1A1A1" }}
            >
              Labels
            </p>

            {/* Label Badges */}
            <div
              className="
        flex flex-wrap
        justify-start
        gap-x-[12px]
        gap-y-[10px]
        w-full
      "
            >
              {labels.map((label, idx) => (
                <LabelBadge key={idx} label={label} />
              ))}
            </div>
          </div>
        )}

        {/* CHART IMAGE */}
        {chart && (
          <div className="mt-2 lg:mt-10">
            <div
              className="
                bg-[#0D0D0D]
                border border-[#2A2A2A]
                rounded-xl
                w-[340px]
                h-[210px]
                flex items-center justify-center
                overflow-hidden
              "
            >
              <img
                src={chart}
                alt="Chart"
                className="object-contain w-full h-full rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
