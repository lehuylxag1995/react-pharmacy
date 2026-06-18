import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { NavLink } from "react-router";
import { CategoryFilter } from "./components/CategoryFilte";
import CategoryList from "./components/CategoryList";
import CategoryListMobile from "./components/CategoryListMobile";

export default function CategoryPage() {
  // const { data, isLoading, isError, error } = useGetCategories();

  // if (isLoading) return <div>Đang tải dữ liệu từ backend... ⏳</div>;

  // if (isError || !data)
  //   return (
  //     <div>
  //       <p>Lỗi mất rồi! ❌</p>
  //       {/* In ra lỗi chi tiết để biết backend báo gì */}
  //       <pre>{JSON.stringify(error, null, 2)}</pre>
  //     </div>
  //   );

  return (
    <div className="px-4 py-3 bg-card text-card-foreground min-h-full">
      <div className="flex flex-col gap-2">
        {/* Tiêu đề */}
        <span className="text-primary text-base font-bold capitalize">
          danh mục
        </span>

        {/* Bộ lọc */}
        <CategoryFilter />

        {/* Thêm danh mục  */}
        <NavLink to={"/admin/category/add"}>
          <Button className="flex w-full ">
            <Plus className="size-5" />
            <span className="capitalize">thêm danh mục</span>
          </Button>
        </NavLink>

        {/* Danh sách Mobile */}
        <CategoryListMobile />

        {/* Danh sách Desktop */}
        <div className="hidden lg:hidden">
          <CategoryList />
        </div>
      </div>
    </div>
  );
}
