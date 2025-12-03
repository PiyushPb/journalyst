"use client";

import React from "react";
import MarketCard from "../ui/MarketCard";
import { plannerSections } from "@/data/edge";
import { Plus, MoreVertical } from "lucide-react";
import EdgeTopNav from "@/components/app/edge/ui/EdgeTopNav";

export default function DailyPlanner() {
  return (
    <div className="w-full flex flex-col">
      
      {/* NAV */}
      <EdgeTopNav />

      <div className="px-10 pt-4"> 
        {/* DAILY PLANNER TITLE */}
        <div className="flex items-center justify-between">
          <h2 className="text-[18px] font-medium tracking-tight text-[#C1C1C1]">
            Daily Planner
          </h2>

          <div className="flex items-center gap-3 text-[#A1A1A1]">
            <button className="hover:text-white transition-colors" title="Add new">
              <Plus size={18} strokeWidth={1.6} />
            </button>
            <button className="hover:text-white transition-colors" title="More options">
              <MoreVertical size={18} strokeWidth={1.6} />
            </button>
          </div>
        </div>

        <div className="mt-6 w-full flex flex-col gap-10 pb-20">
          {plannerSections.map((section) => (
            <MarketCard key={section.id} {...section} />
          ))}
        </div>
      </div>
    </div>
  );
}
