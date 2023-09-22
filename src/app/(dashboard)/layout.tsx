import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <div className="border-r shadow-sm">
        <div className="hidden md:block sticky z-50 top-0 w-56 overflow-hidden">
          <Sidebar />
        </div>
      </div>
      <div className="grow">
        <div className="sticky top-0 h-[75px] z-50 w-full backdrop-blur-sm bg-white/30">
          <Navbar />
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
}
