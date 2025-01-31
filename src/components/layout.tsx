import { SidebarInset, SidebarProvider } from "./ui/sidebar";
import { AppSidebar } from "./app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset className="relative">
        <header className="flex  shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border h-14 sticky top-0 z-10 bg-white ">
          <p className="px-5 text-[#292929] font-semibold">Dashboard</p>
        </header>
        <div className="flex flex-1 flex-col  min-w-full">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
