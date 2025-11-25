"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { name: "Planner", href: "/edge" },
  { name: "Setup", href: "/edge/setup" },
  { name: "Goals", href: "/edge/goals" },
];

export default function EdgeTopNav() {
  const pathname = usePathname();

  return (
    <div className="w-full">
      {/* NAV TABS */}
      <div className="flex items-center gap-8 px-10 pt-5">
        {tabs.map((tab) => {
          const active = pathname === tab.href;

          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={`
                px-5 py-2 text-[15px] font-medium rounded-lg
                transition-all duration-200
                ${
                  active
                    ? "bg-[#2F2F2F] text-white shadow-[0_0_6px_rgba(255,255,255,0.12)]"
                    : "text-[#9C9C9C] hover:text-white hover:bg-[#1A1A1A]"
                }
              `}
            >
              {tab.name}
            </Link>
          );
        })}
      </div>

      {/* FULL UNDERLINE */}
<div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] border-b border-[#2A2A2A] mt-3" />
    </div>
  );
}
