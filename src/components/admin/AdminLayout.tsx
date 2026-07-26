import { useState } from "react";
import { Outlet } from "react-router";

import AdminHeader from "./AdminHeader";
import AdminNavigationMobile from "./AdminNavigationMobile";
import AdminSidebarDesktop from "./AdminSidebarDesktop";
import AdminSidebarMobile from "./AdminSidebarMobile";

export default function AdminLayout() {
  // 1. State điều khiển Desktop: Mặc định là FALSE (không thu gọn -> hiển thị đầy đủ w-64)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // 2. State điều khiển Mobile: Mặc định là FALSE (đóng bản menu trượt)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed inset-0 flex bg-background text-foreground overflow-hidden ">
      {/* Sidebar bản Desktop */}
      <AdminSidebarDesktop isCollapsed={isSidebarCollapsed} />

      {/* Sidebar bản Mobile */}
      <AdminSidebarMobile
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* content bên phải */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <AdminHeader
          isSidebarCollapsed={isSidebarCollapsed}
          setIsSidebarCollapsed={setIsSidebarCollapsed}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        <main className="flex-1 min-h-0 overflow-y-auto overscroll-contain bg-background pb-13 md:pb-0">
          <Outlet />
        </main>

        {/* (Tự ẩn trên Desktop, chỉ hiện trên Mobile) */}
        <AdminNavigationMobile />
      </div>
    </div>
  );
}
