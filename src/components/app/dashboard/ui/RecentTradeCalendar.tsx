import React from "react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const sampleData = {
  1: -546,
  2: -546,
  4: 545,
  5: 545,
  8: -546,
  9: -546,
  11: 545,
  12: 545,
  16: -546,
  17: -546,
  19: 545,
  20: 545,
  23: -546,
  24: -546,
  26: 545,
  27: 545,
};

function RecentTradeCalendar() {
  const renderCell = (day: number | null) => {
    if (!day) return <div className="h-[86px] rounded-xl bg-black/20 w-full" />;

    const amount = sampleData[day];
    const isProfit = amount > 0;
    const isLoss = amount < 0;

    const boxClass = isProfit
      ? "bg-[#0A0A0A] shadow-[inset_0_0_10px_#49DE80] border border-[#49DE80]/40"
      : isLoss
      ? "bg-[#0A0A0A] shadow-[inset_0_0_10px_#FF6B6B] border border-red-500/40"
      : "bg-black/20";

    return (
      <div
        className={`h-[86px] rounded-[15px] w-full flex flex-col items-start justify-start p-3 gap-2 ${boxClass}`}
      >
        <span className="text-xs opacity-70">{day}</span>

        {amount && (
          <span
            className={`text-sm font-semibold ${
              amount > 0 ? "text-[#49DE80]" : "text-red-400"
            }`}
          >
            {amount > 0 ? `$${amount}.00` : `-$${Math.abs(amount)}.00`}
          </span>
        )}
      </div>
    );
  };

  const calendarMatrix: (number | null)[][] = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [16, 17, 18, 19, 20, 21, 22],
    [23, 24, 25, 26, 27, 28, 29],
    [30, 31, 1, 2, 3, 4, 5],
  ];

  return (
    <div className="w-full card">
      {/* Header */}
      <div className="grid grid-cols-9 gap-3 mb-3">
        {days.map((d) => (
          <div
            key={d}
            className="py-2 text-center rounded-xl"
            style={{ backgroundColor: "#1E1E2A" }}
          >
            <span className="text-gray-200 font-medium">{d}</span>
          </div>
        ))}

        {/* Week header (wider) */}
        <div
          className="py-2 text-center rounded-xl col-span-2"
          style={{ backgroundColor: "#1E1E2A" }}
        >
          <span className="text-gray-200 font-medium">Week</span>
        </div>
      </div>

      {/* Calendar rows */}
      {calendarMatrix.map((row, i) => (
        <div key={i} className="grid grid-cols-9 gap-3 mb-3">
          {row.map((day, idx) => (
            <React.Fragment key={idx}>{renderCell(day)}</React.Fragment>
          ))}

          {/* Week summary column (bigger width) */}
          <div className="rounded-xl col-span-2 bg-black/30 p-3">
            <p className="text-xs opacity-60">Week {i + 1}</p>

            {i === 0 && <p className="text-[#49DE80] font-semibold">$545.00</p>}

            {i === 1 && <p className="text-red-400 font-semibold">-$545.00</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentTradeCalendar;
