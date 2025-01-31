import * as React from "react";

import { NavMain } from "./nav-main";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
  useSidebar,
} from "./ui/sidebar";
import {
  DashboardIcon,
  IconCube,
  IconFile,
  IconProps,
  IconStack,
} from "./icons/ui-icons";
import { useSession } from "@/features/auth/hooks/useSession";
import { useNavigate } from "@tanstack/react-router";
import { LogOut } from "lucide-react";
import { Button } from "./ui/button";

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
  const { logOut } = useSession();
  const { open } = useSidebar();

  const navigate = useNavigate({
    from: "/dashboard",
  });

  return (
    <Sidebar collapsible="icon" {...props} className="bg-white">
      <div className="bg-white">
        <img src="/truthify_logo.png" alt="logo" className="p-4" />
      </div>

      <SidebarContent className="bg-white">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className="mb-10">
        <Button
          variant={"ghost"}
          className="bg-[#F1F6FA] flex items-center justify-center w-full"
          onClick={async () => {
            await logOut();
            navigate({
              to: "/",
            });
          }}
        >
          <LogOut />
          <span hidden={!open}>Logout</span>
        </Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
