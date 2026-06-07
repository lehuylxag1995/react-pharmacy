import { useState } from "react";
import { Outlet } from "react-router";
import BottomNavigation from "./bottom-navigation";
import Header from "./header";
import Sidebar from "./sidebar";
import SidebarMobile from "./sidebar-mobile";

export default function AdminLayout() {
  // 1. State điều khiển Desktop: Mặc định là FALSE (không thu gọn -> hiển thị đầy đủ w-64)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // 2. State điều khiển Mobile: Mặc định là FALSE (đóng bản menu trượt)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex bg-background text-foreground h-screen w-screen overflow-hidden">
      {/* Sidebar bản Desktop */}
      <Sidebar isCollapsed={isSidebarCollapsed} />

      {/* Sidebar bản Mobile */}
      <SidebarMobile
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* content bên phải */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Header
          isSidebarCollapsed={isSidebarCollapsed}
          setIsSidebarCollapsed={setIsSidebarCollapsed}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        <main className="flex-1 pb-16 lg:pb-0 bg-background overflow-y-auto">
          <Outlet />
        </main>

        {/* (Tự ẩn trên Desktop, chỉ hiện trên Mobile) */}
        <BottomNavigation />
      </div>
    </div>
  );
}
