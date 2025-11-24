import React from "react";

export default function GoalTag({ label }: { label: string }) {
  const tagColors: Record<string, string> = {
    Finance: "bg-[#4B2E9C] text-[#E3D5FF]",
    Personal: "bg-[#1E3A8A] text-[#D1E8FF]",
    "Short Term Goal": "bg-[#7A4F14] text-[#F9E3B0]",
    Saving: "bg-[#234E52] text-[#CFFFE3]",
    Security: "bg-[#553C0A] text-[#FFE8B2]",
    Health: "bg-[#173F2D] text-[#C6FFE1]",
    Learning: "bg-[#1E3A5F] text-[#C9E3FF]",
    "Skills Development": "bg-[#6B4A0F] text-[#FFE6B8]",
  };

  return (
    <span
  className={`
    px-4 py-[6px]
    text-[13px] font-medium
    rounded-xl
    transition-all duration-200
    hover:opacity-90 hover:scale-[1.03]
    ${tagColors[label] || "bg-[#2A2A2A] text-white"}
  `}
>

      {label}
    </span>
  );
}
