import { Bell, ChevronDown, Mail, Menu, Search } from "lucide-react";
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
    <header className="bg-card flex flex-col shrink-0 md:flex-row md:justify-between">
      {/* DÒNG 1 TRÊN MOBILE */}
      <div className="w-full flex items-center justify-between px-5 pt-5 md:justify-start md:px-3 md:pt-0 md:gap-5 md:w-auto">
        {/* Nút Menu cho Desktop */}
        <button
          className="hidden md:block p-1.5 border transition-colors rounded text-foreground hover:bg-muted"
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)} // Đảo state thu gọn PC
        >
          <Menu className="size-5" />
        </button>

        {/* Nút Menu cho Mobile */}
        <button
          className="md:hidden p-1.5  rounded hover:bg-muted transition-colors text-foreground"
          onClick={() => setIsMobileMenuOpen(true)} // Mở menu trượt Mobile
        >
          <Menu className="size-5" />
        </button>

        <h4 className="hidden md:flex text-base font-semibold text-primary whitespace-nowrap">
          <span>Dashboard</span>
        </h4>

        <div className="md:hidden">
          <Avatar className="size-8">
            <AvatarImage src="https://picsum.photos/200/300" />
            <AvatarFallback>LH</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* DÒNG 2 TRÊN MOBILE */}
      <div className="w-full flex items-center justify-between p-6 md:pr-3 md:w-auto md:gap-6">
        <h4 className="md:hidden text-base font-semibold text-primary whitespace-nowrap">
          <span>Dashboard</span>
        </h4>

        <Search className="size-5 text-muted-foreground cursor-pointer hover:text-foreground" />
        <div className="relative cursor-pointer">
          <Bell className="size-5 text-muted-foreground hover:text-foreground" />
          <div className="absolute -top-1.5 -right-2 bg-red-500 text-white rounded-full size-4 flex items-center justify-center text-[9px] font-bold">
            5
          </div>
        </div>
        <div className="relative cursor-pointer">
          <Mail className="size-5 text-muted-foreground hover:text-foreground" />
          <div className="absolute -top-1.5 -right-2 bg-red-500 text-white rounded-full size-4 flex items-center justify-center text-[9px] font-bold">
            5
          </div>
        </div>

        {/* Màn hình lớn */}
        <div className="hidden md:flex items-center gap-1 border-l pl-4 md:gap-3 border-border">
          <Avatar className="size-8">
            <AvatarImage src="https://picsum.photos/200/300" />
            <AvatarFallback>LH</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start  md:flex">
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
