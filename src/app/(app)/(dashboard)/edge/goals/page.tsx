"use client";

import React from "react";
import {
  Search,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Plus,
} from "lucide-react";
import GoalCard from "@/components/app/edge/goals/components/GoalCard";
import { goalsData } from "@/data/goals";

export default function GoalsPage() {
  return (
    <div className="w-full flex flex-col gap-10 px-6 lg:px-14 pb-20">

      {/* TOP BAR */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4">

        {/* TITLE */}
        <h2 className="text-[22px] font-medium tracking-tight text-[#C1C1C1]">
          My Goals
        </h2>

        {/* RIGHT SIDE BAR */}
        <div className="flex flex-wrap items-center gap-3">

          {/* NAV BUTTONS */}
          <div className="flex items-center gap-2">
            <button
              className="p-2 rounded-lg bg-[#161616] border border-[#2A2A2A]
              hover:bg-[#1E1E1E] hover:border-[#3A3A3A]
              hover:scale-[1.05] active:scale-[0.97]
              transition-all duration-200"
            >
              <ChevronLeft size={16} className="text-[#A1A1A1]" />
            </button>

            <button
              className="p-2 rounded-lg bg-[#161616] border border-[#2A2A2A]
              hover:bg-[#1E1E1E] hover:border-[#3A3A3A]
              hover:scale-[1.05] active:scale-[0.97]
              transition-all duration-200"
            >
              <ChevronRight size={16} className="text-[#A1A1A1]" />
            </button>
          </div>

          {/* CALENDAR */}
          <button
            className="p-2 rounded-lg bg-[#161616] border border-[#2A2A2A]
            hover:bg-[#1E1E1E] hover:border-[#3A3A3A]
            hover:scale-[1.05] active:scale-[0.97]
            transition-all duration-200"
          >
            <Calendar size={16} className="text-[#A1A1A1]" />
          </button>

          {/* SEARCH BAR */}
          <div
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#161616]
            border border-[#2A2A2A] w-[180px] sm:w-[220px]
            hover:border-[#3A3A3A]
            focus-within:border-[#4A4A4A]
            transition-all duration-200"
          >
            <Search size={15} className="text-[#8A8A8A]" />
            <input
              type="text"
              placeholder="Search Goals"
              className="bg-transparent outline-none text-sm text-[#C1C1C1] w-full placeholder-[#666]"
            />
          </div>

          {/* ADD GOAL BUTTON */}
          <button
            className="px-3 py-2 rounded-xl bg-[#1F1F1F] border border-[#333]
            hover:bg-[#272727] hover:border-[#444]
            hover:scale-[1.05] active:scale-[0.97]
            transition-all duration-200 text-[#EAEAEA]
            flex items-center gap-2"
          >
            <Plus size={15} />
            <span className="hidden sm:inline">Add Goal</span>
          </button>
        </div>
      </div>

      {/* GOALS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {goalsData.map((goal, i) => (
          <GoalCard key={i} {...goal} />
        ))}
      </div>
    </div>
  );
}
