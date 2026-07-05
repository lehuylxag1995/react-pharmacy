import { ArrowLeft } from "lucide-react";
import { NavLink } from "react-router";

export default function CategoryHeader({ route }: { route: string }) {
  return (
    <div className="w-full flex items-center gap-3 font-bold text-primary text-lg p-3 bg-card">
      <NavLink to={route}>
        <div className="p-1">
          <ArrowLeft className="size-5" />
        </div>
      </NavLink>
      <span>Thêm danh mục</span>
    </div>
  );
}
