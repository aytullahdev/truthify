"use client";

import { ChevronDown, LogOut, UserIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useSession } from "@/features/auth/hooks/useSession";
import { useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function DashboardUserCard() {
  const { logOut, user } = useSession();

  const navigate = useNavigate({
    from: "/dashboard",
  });

  return (
    <div className="flex items-center gap-2 relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm cursor-pointer">
            <Avatar className="size-8 rounded-lg">
              <AvatarImage src={"/satynadella.png"} alt={user.name} />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold text-[#292929]">
                Robert R
              </span>
            </div>{" "}
            <ChevronDown className="ml-auto size-4" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
          sideOffset={4}
        >
          <DropdownMenuItem>
            <Button variant={"ghost"}>
              <UserIcon />
              Account info
            </Button>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Button
              variant={"ghost"}
              onClick={async () => {
                await logOut();
                navigate({
                  to: "/",
                });
              }}
            >
              <LogOut />
              Log out
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
