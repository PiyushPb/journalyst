"use client";

export default function SetupTag({ label }: { label: string }) {
  const tagColors: Record<string, string> = {
    Forex: "bg-[var(--setup-forex-bg)] text-[var(--setup-forex-text)]",
    Crypto: "bg-[var(--setup-crypto-bg)] text-[var(--setup-crypto-text)]",
    Options: "bg-[var(--setup-options-bg)] text-[var(--setup-options-text)]",
    "High Risk Reward": "bg-[var(--setup-high-bg)] text-[var(--setup-high-text)]",
    "Moderate Win Rate": "bg-[var(--setup-moderate-bg)] text-[var(--setup-moderate-text)]",
    "Low Risk Reward": "bg-[var(--setup-low-bg)] text-[var(--setup-low-text)]",
    Default: "bg-[#2A2A2A] text-white",
  };

  return (
    <span
      className={`
        px-4 py-[6px]
        text-[13px] font-medium
        rounded-xl
        transition-all duration-200
        hover:opacity-90 hover:scale-[1.03]
        ${tagColors[label] || tagColors.Default}
      `}
    >
      {label}
    </span>
  );
}
