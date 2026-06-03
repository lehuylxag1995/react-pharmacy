import { LogOut } from "lucide-react";
import { menuItems } from "./menu-item";

interface SidebarProps {
  isCollapsed: boolean;
}

export default function Sidebar({ isCollapsed }: SidebarProps) {
  return (
    <aside
      className={`hidden md:flex flex-col h-full overflow-hidden border-r bg-sidebar text-sidebar-foreground shrink-0 transition-all duration-300 ease-in-out
          ${isCollapsed ? "w-0" : "md:w-50"}
          `}
    >
      {/* logo */}
      <div className="h-16 flex items-center justify-center border-b gap-1">
        <div className="size-6 bg-sidebar-primary text-sidebar-primary-foreground rounded flex items-center justify-center font-bold text-sm">
          P
        </div>
        <span className="font-bold text-lg text-sidebar-foreground hidden md:block">
          PharmaShop
        </span>
      </div>

      {/* Danh sách Menu Items */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium text-sm
                ${item.active ? "bg-sidebar-primary text-sidebar-primary-foreground" : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"}`}
          >
            <item.icon className="size-4 shrink-0" />
            <span className="md:block">{item.label}</span>
          </a>
        ))}
      </nav>

      {/* Đăng xuất */}
      <div className="p-3 border-t border-sidebar-border">
        <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-red-400 hover:bg-red-500/10 text-sm font-medium md:justify-center lg:justify-start">
          <LogOut className="size-4 shrink-0" />
          <span className="hidden md:block">Đăng xuất</span>
        </button>
      </div>
    </aside>
  );
}
