import { SidebarInset, SidebarProvider } from "./ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import { BellIcon, SearchIcon } from "lucide-react";
import { DashboardUserCard } from "@/features/dashboard/components/dashboard-user-card";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="relative">
        <header className="flex  shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border h-14 sticky top-0 z-10 bg-white ">
          <p className="px-5 text-[#292929] font-semibold ">Dashboard</p>
          <div className="flex-row gap-5 items-center hidden lg:flex px-2">
            <SearchIcon className="lg:size-5" />
            <BellIcon className="lg:size-5" />
            <DashboardUserCard />
          </div>
        </header>
        <div className="flex flex-1 flex-col  min-w-full">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
