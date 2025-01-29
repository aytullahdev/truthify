"use client";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { IconProps } from "./icons/ui-icons";
import { Link, useLocation } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: React.FC<IconProps>;
  }[];
}) {
  const pathName = useLocation({
    select: (location) => location.pathname,
  });
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <Link
            to={item.url}
            key={item.url}
            className={cn(
              "text-[#292929]",
              pathName === item.url && "text-[#016CCD]"
            )}
          >
            <SidebarMenuItem>
              <SidebarMenuButton tooltip={item.title}>
                {item.icon && (
                  <item.icon
                    className={cn(
                      "",
                      pathName === item.url && "stroke-[#016CCD]"
                    )}
                  />
                )}
                <span className="font-medium text-base ">{item.title}</span>
                <div
                  className={cn(
                    "h-[40px] w-[6px] bg-[#016CCD] rounded-l-full absolute -right-2",
                    pathName !== item.url && "hidden"
                  )}
                ></div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </Link>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
