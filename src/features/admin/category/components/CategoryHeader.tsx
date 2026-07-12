import { ArrowLeft } from "lucide-react";
import { NavLink } from "react-router";

export default function CategoryHeader({
  route,
  title,
}: {
  route: string;
  title: string;
}) {
  return (
    <NavLink to={route}>
      <div className="w-full flex items-center gap-2 font-bold text-primary text-lg bg-card py-3">
        <ArrowLeft className="size-5" />
        <span>{title}</span>
      </div>
    </NavLink>
  );
}
