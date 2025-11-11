import DashboardHeader from "@/components/layout/dashboard/DashboardHeader";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main className="flex flex-1 flex-col gap-4 p-[30px]">
          <DashboardHeader />
          <section className="mt-[20px]">{children}</section>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
