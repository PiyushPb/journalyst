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
        w-full
        rounded-[25px]
        border border-[#2A2A2A]/50
        shadow-[0_0_20px_rgba(0,0,0,0.25)]
        bg-[#0E1011]
        p-6
        flex flex-col lg:flex-row
        gap-10
      "
    >
      {/* LEFT CONTENT */}
      <div className="flex flex-col gap-5 flex-1 min-w-0">
        <CardHeader title={title} />

        <p className="text-[18px] leading-[130%] tracking-[0.02em] text-[#EAEAEA] whitespace-pre-line">
          {content}
        </p>

        {tradeData && <TradeCard {...tradeData} />}
      </div>

      {/* RIGHT CONTENT (Labels + Chart) */}
      <div className="flex flex-col gap-6 flex-shrink-0 lg:w-[420px]">
        {labels && labels.length > 0 && (
          <div className="flex flex-col gap-[8px]">
            <p className="text-[18px] font-medium text-[#808184] tracking-[-0.02em]">
              Labels
            </p>

            <div className="flex flex-wrap gap-[8px]">
              {labels.map((label, idx) => (
                <LabelBadge key={idx} label={label} />
              ))}
            </div>
          </div>
        )}

        {chart && (
          <div className="mt-0">
            <div
              className=" w-full h-[322px] bg-[#0D0D0D] border border-[#2A2A2A] rounded-[10px]  overflow-hidden"
            >
              <img
                src={chart}
                alt="Chart"
                className=" w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
