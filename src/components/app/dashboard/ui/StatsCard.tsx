import React from "react";

function StatsCard({ children }: { children?: React.ReactNode }) {
  return (
    <div className="w-full card !px-[30px] py-[20px] flex flex-row gap-2 justify-between flex-wrap">
      <div>
        <h3 className="font-normal text-[16px] leading-[100%] tracking-[0]">
          Today&apos;s Net P&L
        </h3>
        <div className="flex flex-col mt-[30px]">
          <span className="font-medium text-[24px] leading-[100%] tracking-[0]">
            +$8450.0
          </span>
          <span className="font-normal text-[12px] leading-[100%] tracking-[0] text-[#808184] mt-[5px]">
            Total Increment in Profit
          </span>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}

const StatBadge = ({ value }: { value: string }) => {
  if (!value) return null;

  const isNegative = value.startsWith("-");
  const colorClass = isNegative ? "red" : "green";

  return (
    <div
      className={`py-[6px] px-[10px] rounded-full border-[1px] border-${colorClass} text-${colorClass} bg-${colorClass}/20`}
    >
      <span className="text-sm font-semibold">{value}</span>
    </div>
  );
};

const ProgressRing = ({
  value = 1.8,
  min = 0,
  max = 2,
}: {
  value?: number;
  min?: number;
  max?: number;
}) => {
  const clamped = Math.min(Math.max(value, min), max);
  const percentage = ((clamped - min) / (max - min)) * 100;
  const safePercentage = Math.min(percentage, 99.999); // prevent visual wrap

  const radius = 40;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (safePercentage / 100) * circumference;

  return (
    <div className="relative w-[90px] h-[90px]">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 90 90">
        <circle
          cx="45"
          cy="45"
          r={radius}
          stroke="#1E1E1E"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx="45"
          cy="45"
          r={radius}
          stroke="#16A34A"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-500 ease-in-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold">
        {value.toFixed(1)}
      </div>
    </div>
  );
};

export default StatsCard;
export { StatBadge, ProgressRing };
