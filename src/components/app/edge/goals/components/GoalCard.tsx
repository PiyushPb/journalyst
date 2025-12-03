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
        rounded-2xl
        p-5
        flex flex-col gap-6
        transition-all duration-300
        hover:border-[#3A3A3A]
        hover:-translate-y-[4px]
      "
    >
      {/* IMAGE */}
      <div className="w-full h-[200px] rounded-xl overflow-hidden border border-[#2A2A2A]">
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
        <div className="flex flex-col gap-3 w-[70%]">
          <div className="flex items-center gap-2">
            <h3 className="text-[20px] font-semibold text-white">{title}</h3>
            <Clock size={18} className="text-[#A1A1A1]" />
          </div>

          <p className="text-[#BABABA] text-[15px] leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mt-1">
            {labels.map((lbl, i) => (
              <GoalTag key={i} label={lbl} />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE – PROGRESS */}
        <div className="flex flex-col items-center gap-3">
          <ProgressRing value={progress} min={0} max={100} color={ringColor} />

          <span
            className={`px-3 py-1 rounded-lg text-[14px] font-medium flex items-center gap-1 ${badgeStyles}`}
          >
            {status}
            {status === "Failed" && <AlertTriangle size={16} />}
          </span>
        </div>

      </div>
    </div>
  );
}
