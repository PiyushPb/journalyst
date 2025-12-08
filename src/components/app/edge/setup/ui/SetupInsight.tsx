"use client";

import { ArrowUpRight, Info } from "lucide-react";

export default function SetupInsight() {
  return (
    <div className="relative w-full">
      <div className="
        relative rounded-3xl overflow-hidden 
        bg-gradient-to-br from-[#0F0F0F] to-[#1A1A1A]
        border border-[#2A2A2A]
        hover:border-[#3A3A3A]
        transition-all duration-300
      ">
        
        {/* GREEN ACCENT BAR */}
        <div className="
          absolute left-0 top-0 bottom-0 w-[6px] 
          bg-gradient-to-b from-green-400 via-emerald-400 to-green-500
        " />

        {/* MAIN CONTENT */}
        <div className="relative px-6 py-5 flex items-center justify-between gap-6">

          <div className="flex items-start gap-5 flex-1">
            {/* ICON */}
            <ArrowUpRight 
              size={34} 
              strokeWidth={1.5}
              className="text-green-400 mt-1"
            />

            {/* TEXT */}
            <div className="flex-1 min-w-0">
              <h4 className="text-white text-[17px] font-semibold tracking-tight">
                Performance Insight
              </h4>

              <p className="text-zinc-300 text-[14px] mt-[3px]">
                Your Top Setup has a <span className="text-green-400 font-semibold">72% win rate</span>.    consider allocating more size to proven strategies.
              </p>
            </div>
          </div>

          {/* INFO BUTTON */}
          <button className="
            w-10 h-10 rounded-xl 
            flex items-center justify-center
            text-zinc-400 
            hover:bg-[#252525] 
            hover:text-zinc-200
            transition-all
          ">
            <Info size={18} />
          </button>
        </div>

      </div>
    </div>
  );
}
