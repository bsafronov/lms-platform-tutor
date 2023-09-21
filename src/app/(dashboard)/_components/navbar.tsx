import { NavbarRoutes } from "@/shared/components/navbar-routes";
import { MobileSidebar } from "./mobile-sidebar";

export function Navbar() {
  return (
    <div className="p-4 border-b h-full flex items-center  shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
}
