import {
  LucideIcon,
  ChartColumnStacked,
  CircleDot,
  FileText,
  Gem,
  LayoutDashboard,
  NotebookPen,
  Sparkles,
} from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  path: string;
  icon: LucideIcon;
  title?: string;
  description?: string;
}

const mainNavItems: NavItem[] = [
  {
    id: "nav_dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
    title: "Dashboard",
    description : "Good morning! Piyush",
  },
  {
    id: "nav_journal",
    label: "Journal",
    path: "/journal",
    icon: NotebookPen,
  },
  {
    id: "nav_analytics",
    label: "Analytics",
    path: "/analytics",
    icon: ChartColumnStacked,
  },
  {
    id: "nav_edge",
    label: "Edge",
    path: "/edge",
    icon: Gem,
  },
  {
    id: "nav_reports",
    label: "Reports",
    path: "/reports",
    icon: FileText,
  },
  {
    id: "nav_ai",
    label: "AI",
    path: "/ai",
    icon: Sparkles,
  },
  {
    id: "nav_donna",
    label: "Donna",
    path: "/donna",
    icon: CircleDot,
  },
];

export { mainNavItems };
export type { NavItem };
