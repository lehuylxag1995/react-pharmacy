import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { NavLink } from "react-router";
import { CategoryFilter } from "./components/CategoryFilte";
import CategoryList from "./components/CategoryList";
import CategoryListMobile from "./components/CategoryListMobile";

export default function CategoryPage() {
  return (
    <div className="px-4 py-3 bg-background text-foreground">
      <div className="flex flex-col gap-4">
        {/* Tiêu đề */}
        <span className="text-primary text-xl font-semibold capitalize">
          danh mục - sản phẩm
        </span>

        {/* Bộ lọc */}
        <CategoryFilter />

        {/* Thêm danh mục  */}
        <NavLink to={"/admin/category/add"}>
          <Button className="flex gap-3 w-full py-5">
            <Plus className="size-5" />
            <span className="capitalize">thêm danh mục</span>
          </Button>
        </NavLink>

        {/* Danh sách Mobile */}
        <div className="lg:hidden flex flex-col gap-8">
          <CategoryListMobile />
        </div>

        {/* Danh sách Desktop */}
        <div className="hidden lg:block">
          <CategoryList />
        </div>
      </div>
    </div>
  );
}
