"use client";

import React from "react";
import { Search, Calendar, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import GoalCard from "@/components/app/edge/goals/components/GoalCard";
import { goalsData } from "@/data/goals";
import EdgeTopNav from "@/components/app/edge/ui/EdgeTopNav";

export default function GoalsPage() {
  return (
    <div className="w-full flex flex-col pb-20">

      <EdgeTopNav />

      {/* PAGE WRAPPER */}
      <div className="px-10 pt-4">

        {/* HEADER */}
        <div className="flex items-center justify-between">

          <h2 className="text-[22px] font-normal leading-none tracking-[-0.02em] text-[#808184]">
            My Goals
          </h2>

           <div className="flex items-center gap-3 text-[#A1A1A1]">
            {/* Left/Right Controls */}
            <div className="flex items-center gap-2">
              <button className="p-[6px] rounded-lg bg-[#161616] border border-[#2A2A2A] hover:bg-[#1E1E1E] transition-all">
                <ChevronLeft size={16} className="text-[#A1A1A1]" />
              </button>

              <button className="p-[6px] rounded-lg bg-[#161616] border border-[#2A2A2A] hover:bg-[#1E1E1E] transition-all">
                <ChevronRight size={16} className="text-[#A1A1A1]" />
              </button>
            </div>

            {/* Calendar */}
            <button className="p-[6px] rounded-lg bg-[#161616] border border-[#2A2A2A] hover:bg-[#1E1E1E] transition-all">
              <Calendar size={16} className="text-[#A1A1A1]" />
            </button>

            {/* Search Bar */}
            <div className="flex items-center gap-2 px-3 py-[6px] rounded-lg bg-[#161616] border border-[#2A2A2A] w-[200px] hover:border-[#3A3A3A] transition-all">
              <Search size={14} className="text-[#8A8A8A]" />
              <input
                type="text"
                placeholder="Search Goals"
                className="bg-transparent outline-none text-sm text-[#C1C1C1] w-full"
              />
            </div>

            {/* Add Goal Button */}
            <button className="px-3 py-[6px] rounded-lg bg-[#1F1F1F] border border-[#333] hover:bg-[#272727] transition-all text-[#EAEAEA] flex items-center gap-2">
              <Plus size={15} />
              <span className="hidden sm:inline">Add Goal</span>
            </button>

          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-12 w-full mt-6">
          {goalsData.map((goal, i) => (
            <GoalCard key={i} {...goal} />
          ))}
        </div>

      </div>
    </div>
  );
}
