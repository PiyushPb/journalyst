/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import LabelBadge from "./LabelBadge";
import TradeCard from "./TradeCard";
import CardHeader from "./CardHeader";

export default function MarketCard({
  title,
  content,
  chart,
  tradeData,
  labels,
}) {
  return (
    <div
      className="
        card w-full
        flex flex-col lg:flex-row
        justify-between
        gap-10
      "
    >
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-5 flex-1 min-w-0">
        <CardHeader title={title} />

        <p className="text-sm text-[#B0B0B0] leading-relaxed whitespace-pre-line">
          {content}
        </p>

        {tradeData && <TradeCard {...tradeData} />}
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col gap-6 flex-shrink-0 lg:w-[420px] lg:pl-12">

{labels && labels.length > 0 && (
  <div className="flex flex-col gap-3 mr-[10px]">
    <p className="text-[18px] font-medium text-[#A1A1A1]">Labels</p>

    <div className="flex flex-wrap gap-2">
      {labels.map((label, idx) => (
        <LabelBadge key={idx} label={label} />
      ))}
    </div>
  </div>
)}


        {/* CHART  */}
        {chart && (
          <div className="mt-3">
            <div
              className="
                bg-[#0D0D0D]
                border border-[#2A2A2A]
                rounded-2xl
                w-full
                h-[240px]
                overflow-hidden
              "
            >
              <img
                src={chart}
                alt="Chart"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
