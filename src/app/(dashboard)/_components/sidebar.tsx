import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";

export function Sidebar() {
  return (
    <div className="h-full flex flex-col overflow-y-auto bg-white">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
}
