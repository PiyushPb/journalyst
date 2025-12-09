"use client";

import React from "react";
import MarketCard from "../ui/MarketCard";
import { plannerSections } from "@/data/edge";
import { Plus, MoreVertical } from "lucide-react";
import EdgeTopNav from "@/components/app/edge/ui/EdgeTopNav";

export default function DailyPlanner() {
  return (
    <div className="w-full flex flex-col">

      <EdgeTopNav />

      <div className="px-10 pt-4">
        <div className="flex items-center justify-between">
          <h2 className="text-[22px] font-normal leading-none tracking-[-0.02em] text-[#808184]">
            Daily Planner
          </h2>

          <div className="flex items-center gap-3 text-[#A1A1A1]">
            <button className="hover:text-white transition">
              <Plus size={18} strokeWidth={1.6} />
            </button>
            <button className="hover:text-white transition">
              <MoreVertical size={18} strokeWidth={1.6} />
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-10 pb-20">
          {plannerSections.map((section) => (
            <MarketCard key={section.id} {...section} />
          ))}
        </div>
      </div>
    </div>
  );
}
