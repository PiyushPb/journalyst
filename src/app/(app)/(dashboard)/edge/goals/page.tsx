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

      <div className="px-10 pt-4 w-full">

        <div className="flex items-center justify-between">
          
          <h2 className="text-[18px] font-medium tracking-tight text-[#C1C1C1]">
            My Goals
          </h2>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg bg-[#161616] border border-[#2A2A2A] hover:bg-[#1E1E1E] transition-all">
                <ChevronLeft size={16} className="text-[#A1A1A1]" />
              </button>

              <button className="p-2 rounded-lg bg-[#161616] border border-[#2A2A2A] hover:bg-[#1E1E1E] transition-all">
                <ChevronRight size={16} className="text-[#A1A1A1]" />
              </button>
            </div>

            <button className="p-2 rounded-lg bg-[#161616] border border-[#2A2A2A] hover:bg-[#1E1E1E] transition-all">
              <Calendar size={16} className="text-[#A1A1A1]" />
            </button>

            {/* Search */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#161616] border border-[#2A2A2A] w-[180px] sm:w-[220px] hover:border-[#3A3A3A] focus-within:border-[#4A4A4A] transition-all">
              <Search size={15} className="text-[#8A8A8A]" />
              <input
                type="text"
                placeholder="Search Goals"
                className="bg-transparent outline-none text-sm text-[#C1C1C1] w-full placeholder-[#666]"
              />
            </div>

            <button className="px-3 py-2 rounded-xl bg-[#1F1F1F] border border-[#333] hover:bg-[#272727] hover:border-[#444] transition-all text-[#EAEAEA] flex items-center gap-2">
              <Plus size={15} />
              <span className="hidden sm:inline">Add Goal</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-12 w-full mt-6">
          {goalsData.map((goal, i) => (
            <GoalCard key={i} {...goal} />
          ))}
        </div>

      </div>
    </div>
  );
}
