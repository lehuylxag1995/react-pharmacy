import { X } from "lucide-react";
import { NavLink } from "react-router";
import { menuItems } from "./menu-item";

interface SidebarMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SidebarMobile({ isOpen, onClose }: SidebarMobileProps) {
  return (
    <div
      className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 
      ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      {/* Lớp nền mờ bên dưới */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Khung nội dung menu trượt */}
      <aside
        className={`absolute inset-y-0 left-0 w-60 bg-sidebar text-sidebar-foreground flex flex-col p-4 transition-transform duration-300 ease-in-out 
            ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* logo va X  */}
        <div className="h-16 flex items-center justify-between border-b">
          <div className="flex items-center gap-2">
            <div className="size-6 bg-sidebar-primary text-sidebar-primary-foreground rounded flex items-center justify-center font-bold text-xl">
              P
            </div>
            <span className="font-bold text-xl text-sidebar-foreground ">
              PharmaShop
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-sidebar-foreground hover:text-sidebar-accent-foreground"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="flex-1 p-1 space-y-1 overflow-y-auto">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              end={item.path === "/admin"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium text-sm transition-colors
              ${
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground" // Khi đang ở trang này
                  : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground" // Khi ở trang khác
              }`
              }
            >
              <item.icon className="size-4 shrink-0" />
              <span className="md:block">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </div>
  );
}
