"use client";

import * as React from "react";

import { NavUser } from "@/components/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import SideHeader from "./sidebar-header";
import MainNav from "./nav-button";
import { mainNavItems } from "@/constant/sideBarLinks";

const data = {
  user: {
    name: "Piyush",
    email: "piyush@gmail.com",
    avatar: "/avatars/piyush.jpg",
  },
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SideHeader />
      </SidebarHeader>
      <SidebarContent>
        <MainNav items={mainNavItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
