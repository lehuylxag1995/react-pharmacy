import { ArrowLeft } from "lucide-react";
import { NavLink } from "react-router";

export default function CategoryHeader({ route }: { route: string }) {
  return (
    <div className="flex items-center gap-5 font-bold text-primary text-[18px] p-4 bg-card">
      <NavLink to={route}>
        <div className="p-1">
          <ArrowLeft className="size-5" />
        </div>
      </NavLink>
      <span>Thêm danh mục</span>
    </div>
  );
}
