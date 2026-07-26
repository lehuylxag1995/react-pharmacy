import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Check } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import type { ICategoryWithParentName } from "../interfaces/category.interface";

export default function CategoryAddSuccessPage() {
  let location = useLocation();
  let navigate = useNavigate();

  const category = location.state.newCategory as ICategoryWithParentName;

  if (!category) {
    return (
      <Link to="/admin/categories/add">
        <div className="p-8 text-center">
          <Button>Quay lại trang thêm</Button>
        </div>
      </Link>
    );
  }

  const formatDate = format(category.createdAt, "dd-MM-yyyy");

  return (
    <div className="m-4 bg-card text-card-foreground shadow border rounded-2xl">
      <div className="px-4 py-5">
        <div className="flex flex-col">
          {/* thông báo */}
          <div className="flex flex-col items-center justify-center gap-3 px-5 py-10 bg-accent text-accent-foreground rounded-2xl">
            <Check className="size-10 rounded-full bg-primary text-primary-foreground p-1" />
            <h3 className="font-bold text-base text-center">
              Thêm danh mục thành công
            </h3>
            <p className="text-center text-pretty text-muted-foreground text-sm">
              Danh mục <span className="font-semibold">{category.name}</span> đã
              được tạo thành công
            </p>
          </div>
        </div>
      </div>

      <hr />

      <div className="px-4 py-5 flex flex-col bg-card text-card-foreground">
        <h3 className="text-xl font-bold pb-3">Thông tin danh mục</h3>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <span className="text-foreground font-semibold">Tên danh mục</span>
          <span className="text-right font-medium text-muted-foreground">
            {category.name}
          </span>

          <span className="text-foreground font-semibold">Danh mục cha</span>
          <span className="text-right font-medium text-muted-foreground">
            {category.parentName === null ? "Thư mục gốc" : category.parentName}
          </span>

          <span className="text-foreground font-semibold">Mô tả</span>
          <span className="text-right font-medium text-muted-foreground">
            {category.description && category.description.length > 0
              ? category.description
              : "Chưa nhập mô tả"}
          </span>

          <span className="text-foreground font-semibold">Thứ tự hiển thị</span>
          <span className="text-right font-medium text-muted-foreground">
            {category.sortOrder}
          </span>

          <span className="text-foreground font-semibold">Ngày tạo</span>
          <span className="text-right font-medium text-muted-foreground">
            {formatDate}
          </span>

          <span className="text-foreground font-semibold">Trạng thái</span>
          <span className="text-right font-medium text-muted-foreground">
            <span className="bg-accent text-accent-foreground px-2 py-1 rounded border border-primary text-sm">
              {category.isActive ? "Hiển thị" : "Ẩn"}
            </span>
          </span>
        </div>
      </div>

      <hr />

      <div className="px-4 py-5 flex flex-col gap-2">
        <Button
          variant={"secondary"}
          className="rounded-2xl py-2 cursor-pointer text-base font-medium"
          onClick={() => navigate("/admin/categories/add")}
        >
          Thêm danh mục khác
        </Button>

        <Button
          onClick={() => navigate("/admin/categories")}
          className="rounded-2xl py-2 cursor-pointer text-base font-medium"
        >
          Quay về danh sách
        </Button>
      </div>
    </div>
  );
}
