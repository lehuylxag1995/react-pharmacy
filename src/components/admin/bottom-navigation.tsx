import {
  Box,
  Layers,
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
  { icon: Layers, label: "Danh mục", badge: 3, path: "/admin/category" },
  { icon: MoreHorizontal, label: "Thêm", badge: 0, path: "/admin/add" },
];

export default function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-13 w-full shrink-0 z-50 bg-background border-t flex items-center justify-around md:hidden ">
      {navItems.map((item, index) => {
        return (
          <NavLink
            key={index}
            to={item.path}
            end={item.path === "/admin"}
            className={({ isActive }) =>
              `flex flex-col items-center transition-colors
                ${
                  isActive
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                }`
            }
          >
            {({ isActive }) => (
              <>
                <div
                  className={`p-1 rounded-lg transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-transparent"
                  }`}
                >
                  <item.icon className="size-5" />
                </div>

                <span className={`text-xs ${isActive ? "font-semibold" : ""}`}>
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
}
