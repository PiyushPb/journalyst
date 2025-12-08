"use client";

import React from "react";
import clsx from "clsx";

interface LabelBadgeProps {
  label: string;
}

export default function LabelBadge({ label }: LabelBadgeProps) {
  const key = label.trim();

  const colorMap: Record<string, string> = {
    Disciplined:
      "bg-[color:var(--label-disciplined-bg)] text-[color:var(--label-disciplined-text)] border-[color:var(--label-disciplined-text)]/50",
    Relief:
      "bg-[color:var(--label-relief-bg)] text-[color:var(--label-relief-text)] border-[color:var(--label-relief-text)]/50",
    Focused:
      "bg-[color:var(--label-focused-bg)] text-[color:var(--label-focused-text)] border-[color:var(--label-focused-text)]/50",
    ExecutionConfidence:
      "bg-[color:var(--label-execution-bg)] text-[color:var(--label-execution-text)] border-[color:var(--label-execution-text)]/50",
    SlightAnxiety:
      "bg-[color:var(--label-anxiety-bg)] text-[color:var(--label-anxiety-text)] border-[color:var(--label-anxiety-text)]/50",
  };

  return (
    <span
      className={clsx(
        "text-[13px] font-medium rounded-full px-3 py-[3px]",
        "border shadow-[inset_0_0_6px_rgba(0,0,0,0.25)]",
        "select-none transition-all hover:opacity-90",
        colorMap[key] ||
          "bg-[#1F1F1F] text-[#B4B4B4] border border-[#3A3A3A]"
      )}
    >
      #{key}
    </span>
  );
}
