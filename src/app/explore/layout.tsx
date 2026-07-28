import { Sidebar } from "@/components/dashboard/Sidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-surface">
      <Sidebar />
      <main className="flex-grow ml-64 min-h-screen">
        <DashboardHeader />
        {children}
      </main>
    </div>
  );
}
