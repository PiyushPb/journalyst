"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { NavItem } from "@/constant/sideBarLinks";
import { cn } from "@/lib/utils";
import Link from "next/link";

function MainNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Menu</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item: NavItem) => {
          const isActive = pathname.startsWith(item.path);

          return (
            <SidebarMenuItem key={item.id}>
              <SidebarMenuButton
                asChild
                isActive={isActive}
                className={cn(
                  "transition-all duration-200 ease-in-out hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  isActive && "sidebar-active",
                  isActive ? "" : "text-gray-400 hover:text-gray-600"
                )}
              >
                <Link href={item.path}>
                  <item.icon />
                  <span className="text-[16px]">{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}

export default MainNav;
