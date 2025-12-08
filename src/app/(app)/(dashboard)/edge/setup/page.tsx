"use client";

import EdgeTopNav from "@/components/app/edge/ui/EdgeTopNav";
import { setupData } from "@/data/setupData";
import SetupCard from "@/components/app/edge/setup/components/SetupCard";
import SetupInsight from "@/components/app/edge/setup/ui/SetupInsight";
import { Search, GitCompare, Plus } from "lucide-react";

export default function SetupPage() {
  return (
    <div className="w-full flex flex-col pb-10">

      <EdgeTopNav />

      <div className="px-10 pt-4 w-full">

        {/* TITLE + ACTION BUTTONS */}
        <div className="flex items-center justify-between">

          <h2 className="text-[18px] font-medium tracking-tight text-[#C1C1C1]">
            My Setups
          </h2>

          <div className="flex items-center gap-3">

            {/* SEARCH */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#161616] border border-[#2A2A2A] w-[200px] hover:border-[#3A3A3A] transition-all">
              <Search size={15} className="text-[#8A8A8A]" />
              <input
                type="text"
                placeholder="Search Setup"
                className="bg-transparent outline-none text-sm text-[#C1C1C1] w-full"
              />
            </div>

            {/* COMPARE SETUP */}
            <button className="px-4 py-2 rounded-xl bg-[#161616] border border-[#2A2A2A] hover:bg-[#1E1E1E] hover:border-[#3A3A3A] transition-all flex items-center gap-2 text-[#C1C1C1]">
              <GitCompare size={15} />
              <span className="hidden sm:inline">Compare Setup</span>
            </button>

            {/* ADD SETUP */}
            <button className="px-4 py-2 rounded-xl bg-[#1F1F1F] border border-[#333] hover:bg-[#272727] hover:border-[#444] transition-all flex items-center gap-2 text-[#EAEAEA]">
              <Plus size={15} />
              <span className="hidden sm:inline">Add Setup</span>
            </button>

          </div>
        </div>

        {/* PERFORMANCE INSIGHT */}
        <div className="mt-6">
          <SetupInsight />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-12 mt-6 mb-4">
          {setupData.map((item) => (
            <SetupCard key={item.id} {...item} />
          ))}
        </div>

        {/* ADD NEW SETUP BUTTON */}
        <div className="w-full flex justify-center mt-6">
          <button className="
              px-5 py-2.5 
              rounded-xl 
              bg-[#1A1A1A] 
              border border-[#2F2F2F]
              text-[#CFCFCF]
              hover:bg-[#222222] hover:border-[#3A3A3A]
              transition-all
              flex items-center gap-2
              shadow-[0_0_20px_rgba(0,0,0,0.3)]
          ">
            <Plus size={16} />
            Add New Setup
          </button>
        </div>

      </div>
    </div>
  );
}
