"use client";

import React from "react";
import { ImagePlus, MoreVertical } from "lucide-react";

interface CardHeaderProps {
  title: string;
}

export default function CardHeader({ title }: CardHeaderProps) {
  return (
    <div
      className="
        flex items-center justify-between
        w-full
        h-[41px]
        px-4
        rounded-[10px]
        border border-[#343434]
        bg-[#1C1C1C]
      "
    >
      <h3 className="text-[18px] font-medium leading-none tracking-[-0.02em] text-[#E8E8E8]">
        {title}
      </h3>

      <div className="flex items-center gap-4 text-[#A1A1A1]">
        <button className="p-1.5 hover:bg-[#2A2A2A] rounded-md transition">
          <ImagePlus size={18} strokeWidth={1.5} />
        </button>

        <button className="p-1.5 hover:bg-[#2A2A2A] rounded-md transition">
          <MoreVertical size={18} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
