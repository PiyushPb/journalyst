"use client";

export default function GoalTag({ label }: { label: string }) {
  const goalStyles: Record<string, string> = {
    Finance: "bg-[var(--goal-finance-bg)] text-[var(--goal-finance-text)]",
    Personal: "bg-[var(--goal-personal-bg)] text-[var(--goal-personal-text)]",
    "Short Term Goal": "bg-[var(--goal-shortterm-bg)] text-[var(--goal-shortterm-text)]",
    Saving: "bg-[var(--goal-saving-bg)] text-[var(--goal-saving-text)]",
    Security: "bg-[var(--goal-security-bg)] text-[var(--goal-security-text)]",
    Health: "bg-[var(--goal-health-bg)] text-[var(--goal-health-text)]",
    Learning: "bg-[var(--goal-learning-bg)] text-[var(--goal-learning-text)]",
    "Skills Development": "bg-[var(--goal-skills-bg)] text-[var(--goal-skills-text)]",
    Fitness: "bg-[var(--goal-fitness-bg)] text-[var(--goal-fitness-text)]",
  };

  return (
    <span
      className={`
        px-3 py-[4px]
        text-[13px] font-medium
        rounded-lg
        transition-all duration-200
        hover:opacity-90
        ${goalStyles[label] || "bg-[#2A2A2A] text-white"}
      `}
    >
      {label}
    </span>
  );
}
