import * as React from "react";

import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

import { Sidebar, SidebarContent, SidebarFooter } from "./ui/sidebar";
import {
  DashboardIcon,
  IconCube,
  IconFile,
  IconProps,
  IconStack,
} from "./icons/ui-icons";

// This is sample data.
const data: {
  navMain: {
    title: string;
    url: string;
    icon?: React.FC<IconProps>;
  }[];
} = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: DashboardIcon,
    },
    {
      title: "Execctives",
      url: "/executives",
      icon: IconStack,
    },
    {
      title: "Tab",
      url: "/tab",
      icon: IconCube,
    },
    {
      title: "Make Your Own",
      url: "/make-your-own",
      icon: IconFile,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <div>
        <img src="/truthify_logo.png" alt="logo" className="p-4" />
      </div>

      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
