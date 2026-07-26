import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { NavLink } from "react-router";

import BreadcrumbAdmin from "../../breadcrumb/components/breadcrumb";
import { CategoryFilter } from "../components/CategoryFilter";
import CategoryList from "./CategoryListDesktop.page";
import CategoryListMobile from "./CategoryListMobile.page";

export default function CategoryListPage() {
  return (
    <div className="bg-card text-card-foreground">
      <div className="px-4 py-3 min-h-full">
        <div className="flex flex-col gap-2">
          {/* Tiêu đề */}
          <BreadcrumbAdmin />

          {/* Bộ lọc */}
          <CategoryFilter />

          {/* Thêm danh mục  */}
          <NavLink to={"/admin/categories/add"}>
            <Button className="flex w-full ">
              <Plus className="size-5" />
              <span className="capitalize">thêm danh mục</span>
            </Button>
          </NavLink>

          {/* Danh sách Mobile */}
          {/* <div className="lg:hidden"> */}
          <CategoryListMobile />
          {/* </div> */}

          {/* Danh sách Desktop */}
          <div className="hidden lg:hidden">
            <CategoryList />
          </div>
        </div>
      </div>
    </div>
  );
}
