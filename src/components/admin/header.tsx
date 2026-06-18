import { Bell, ChevronDown, Mail, Menu } from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface HeaderProps {
  isSidebarCollapsed: boolean;
  setIsSidebarCollapsed: (value: boolean) => void;
  setIsMobileMenuOpen: (value: boolean) => void;
}
export default function Header({
  isSidebarCollapsed,
  setIsMobileMenuOpen,
  setIsSidebarCollapsed,
}: HeaderProps) {
  return (
    <header className="h-12 lg:h-16 w-full bg-sidebar text-sidebar-foreground border-b shadow-md/5 flex items-center justify-between px-4 shrink-0 ">
      {/* menu + tên trang */}
      <div className="flex items-center gap-2 lg:gap-5">
        {/* Nút Menu cho Desktop */}
        <button
          className="hidden md:block p-2 border transition-colors rounded text-foreground hover:bg-muted"
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)} // Đảo state thu gọn PC
        >
          <Menu className="size-5" />
        </button>

        {/* Nút Menu cho Mobile */}
        <button
          className="md:hidden p-1 rounded border transition-colors bg-secondary text-foreground"
          onClick={() => setIsMobileMenuOpen(true)} // Mở menu trượt Mobile
        >
          <Menu className="size-5" />
        </button>
      </div>

      {/* nút chức năng + avatar */}
      <div className="flex items-center gap-5">
        {/* bộ 3 icon của header */}
        <ModeToggle />

        <div className="relative cursor-pointer">
          <Bell className="size-5 text-muted-foreground hover:text-foreground" />
          <div className="absolute -top-1.5 -right-2 bg-red-500 text-white rounded-full size-4 flex items-center justify-center text-[9px] font-bold">
            5
          </div>
        </div>

        <div className="hidden lg:block relative cursor-pointer">
          <Mail className="size-5 text-muted-foreground hover:text-foreground" />
          <div className="absolute -top-1.5 -right-2 bg-red-500 text-white rounded-full size-4 flex items-center justify-center text-[9px] font-bold">
            5
          </div>
        </div>

        {/* avatar cho mobile */}
        <div className="md:hidden">
          <Avatar className="size-8">
            <AvatarImage src="https://picsum.photos/200/300" />
            <AvatarFallback>LH</AvatarFallback>
          </Avatar>
        </div>

        {/* avatar cho desktop */}
        <div className="hidden md:flex items-center gap-3 border-l pl-4">
          <Avatar className="size-8">
            <AvatarImage src="https://picsum.photos/200/300" />
            <AvatarFallback>LH</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start">
            <span className="text-[13px] font-semibold leading-tight">
              Lê Huy Trúc Thuỷ
            </span>
            <span className="text-[10px] text-muted-foreground">
              Quản trị viên
            </span>
          </div>
          <ChevronDown className="size-4 text-muted-foreground md:block" />
        </div>
      </div>
    </header>
  );
}
