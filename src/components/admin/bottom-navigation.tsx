import {
  Bell,
  Box,
  LayoutDashboard,
  MoreHorizontal,
  ShoppingBag,
} from "lucide-react";
import { NavLink } from "react-router";

const navItems = [
  {
    icon: LayoutDashboard,
    label: "Tổng quan",
    badge: 0,
    path: "/admin",
  },
  { icon: ShoppingBag, label: "Đơn hàng", badge: 0, path: "/admin/order" },
  { icon: Box, label: "Sản phẩm", badge: 0, path: "/admin/product" },
  { icon: Bell, label: "Thông báo", badge: 3, path: "/admin/notification" },
  { icon: MoreHorizontal, label: "Thêm", badge: 0, path: "/admin/add" },
];

export default function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 left-0 h-16 right-0 z-50 px-2 w-full bg-background border-t flex items-center justify-around md:hidden ">
      {navItems.map((item, index) => {
        return (
          <NavLink
            key={index}
            to={item.path}
            end={item.path === "/admin"}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 transition-colors
                ${
                  isActive
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`
            }
          >
            <item.icon className="size-5" />
            <span className="text-[10px] tracking-tight">{item.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}
