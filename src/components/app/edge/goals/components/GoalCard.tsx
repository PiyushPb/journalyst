"use client";

import React from "react";
import Image from "next/image";
import { Clock, AlertTriangle } from "lucide-react";
import GoalTag from "../ui/GoalTag";
import { ProgressRing } from "@/components/app/dashboard/ui/StatsCard";

export default function GoalCard({
  title,
  description,
  image,
  labels,
  progress,
  status,
}) {
  const ringColor =
    status === "Failed"
      ? "#FF6B6B"
      : status === "In Progress"
      ? "#16A34A"
      : "#A1A1A1";

  const badgeStyles =
    status === "Not Started"
      ? "bg-[#2A2A2A] text-[#C1C1C1]"
      : status === "In Progress"
      ? "bg-[#113F20] text-[#6CDA84]"
      : "bg-[#401A1A] text-[#FF6B6B]";

  return (
    <div
      className="
      w-full
      bg-gradient-to-b from-[#0F0F0F] to-[#161616]
      border border-[#2A2A2A]
      rounded-[20px]
      p-4
      flex flex-col gap-5
      transition-all duration-300
      hover:border-[#3A3A3A]
    "
    >
      {/* IMAGE */}
      <div className="w-full h-[180px] rounded-xl overflow-hidden border border-[#2A2A2A]">
        <Image
          src={image}
          alt={title}
          width={900}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>

      {/* CONTENT */}
      <div className="flex justify-between items-start w-full gap-6">
        {/* LEFT SIDE */}
        {/* LEFT SIDE */}
        <div className="flex flex-col w-[70%]">
          {/* TITLE ROW */}
          <div className="flex items-center gap-[6px] mb-[8px]">
            <h3 className="text-[20px] font-semibold text-white leading-none">
              {title}
            </h3>
            <Clock size={18} className="text-[#A1A1A1]" />
          </div>

          {/* DESCRIPTION — fixed height + vertical padding for consistent spacing */}
          <p className="text-[#808184] text-[16px] leading-[120%] min-h-[56px] py-[4px]">
            {description}
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mt-[8px]">
            {labels.map((lbl, i) => (
              <GoalTag key={i} label={lbl} />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center gap-2">
          <ProgressRing value={progress} min={0} max={100} color={ringColor} />

          <span
            className={`
            px-3 py-[4px]
            text-[13px] font-medium
            rounded-lg flex items-center gap-1
            ${badgeStyles}
          `}
          >
            {status}
            {status === "Failed" && <AlertTriangle size={14} />}
          </span>
        </div>
      </div>
    </div>
  );
}
