import recentTrades from "@/data/recentTrade";
import React from "react";

function RecentTradeTable() {
  return (
    <div className="w-full max-w-[35%] card flex flex-col gap-5">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[#24252C] text-gray-400 text-left">
            <th className="py-2 pl-2 font-medium text-left">Close Date</th>
            <th className="py-2 font-medium text-left">Symbol</th>
            <th className="py-2 font-medium text-left">Side</th>
            <th className="py-2 pr-2 font-medium text-right">Net P&amp;L</th>
          </tr>
        </thead>

        {/* Spacer row must go INSIDE tbody */}
        <tbody className="text-gray-100">
          <tr className="h-[20px]"></tr>

          {recentTrades.map((trade, idx) => (
            <tr key={idx} className="border-t border-gray-800">
              <td className="py-2">{trade.closeDate}</td>
              <td className="py-2">{trade.symbol}</td>

              <td
                className={`py-2 ${
                  trade.side === "Buy" ? "text-green-400" : "text-red-400"
                }`}
              >
                {trade.side === "Buy" ? "▲ Buy" : "▼ Sell"}
              </td>

              <td
                className={`py-2 text-right ${
                  trade.netPnl > 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                {trade.netPnl > 0
                  ? `$${trade.netPnl.toFixed(2)}`
                  : `-$${Math.abs(trade.netPnl).toFixed(2)}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentTradeTable;
