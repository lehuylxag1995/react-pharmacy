import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Eye, Package, Pencil } from "lucide-react";
import CategoryDeleteModal from "./CategoryDeleteModal";
import CategoryPagination from "./CategoryPagination";

const categories = [
  {
    id: 1,
    name: "Thuốc giảm đau",
    parent: "Thuốc",
    productCount: 45,
    status: Math.round(Math.random()),
  },
  {
    id: 2,
    name: "Thuốc cảm cúm",
    parent: "Thuốc",
    productCount: 32,
    status: Math.round(Math.random()),
  },
  {
    id: 3,
    name: "Vitamin - Khoáng chất",
    parent: "Thực phẩm chức năng",
    productCount: 28,
    status: Math.round(Math.random()),
  },
  {
    id: 4,
    name: "Siro - Kẹo ngậm",
    parent: "Thuốc",
    productCount: 18,
    status: Math.round(Math.random()),
  },
  {
    id: 5,
    name: "Chăm sóc cá nhân",
    parent: "Chăm sóc sức khỏe",
    productCount: 56,
    status: Math.round(Math.random()),
  },
  {
    id: 6,
    name: "Mẹ & Bé",
    parent: "Chăm sóc sức khỏe",
    productCount: 48,
    status: Math.round(Math.random()),
  },
  {
    id: 7,
    name: "Thiết bị y tế",
    parent: "Thiết bị y tế",
    productCount: 25,
    status: Math.round(Math.random()),
  },
  {
    id: 8,
    name: "Thuốc tiêu hóa",
    parent: "Thuốc",
    productCount: 37,
    status: Math.round(Math.random()),
  },
  {
    id: 9,
    name: "Thuốc tim mạch",
    parent: "Thuốc",
    productCount: 21,
    status: Math.round(Math.random()),
  },
  {
    id: 10,
    name: "Thuốc dị ứng",
    parent: "Thuốc",
    productCount: 19,
    status: Math.round(Math.random()),
  },
  {
    id: 11,
    name: "Thuốc mắt",
    parent: "Thuốc",
    productCount: 14,
    status: Math.round(Math.random()),
  },
  {
    id: 12,
    name: "Chăm sóc da",
    parent: "Mỹ phẩm",
    productCount: 63,
    status: Math.round(Math.random()),
  },
  {
    id: 13,
    name: "Thực phẩm bổ não",
    parent: "Thực phẩm chức năng",
    productCount: 29,
    status: Math.round(Math.random()),
  },
  {
    id: 14,
    name: "Hỗ trợ xương khớp",
    parent: "Thực phẩm chức năng",
    productCount: 34,
    status: Math.round(Math.random()),
  },
  {
    id: 15,
    name: "Khẩu trang y tế",
    parent: "Thiết bị y tế",
    productCount: 12,
    status: Math.round(Math.random()),
  },
];

export default function CategoryListMobile() {
  return (
    <div className="lg:hidden flex flex-col gap-5">
      {/* danh sách */}
      <div className="flex flex-col gap-3">
        {categories?.map((c, i) => {
          return (
            <Card key={i} className="shadow-md">
              <CardContent>
                <div className="flex justify-between">
                  <div className="flex gap-5">
                    {/* STT */}
                    <span className="text-base font-bold">{c.id}</span>

                    {/* thông tin danh mục */}
                    <div className="flex flex-col gap-4 capitalize">
                      <div className="flex flex-col gap-1">
                        <span className="text-base font-bold">{c.name}</span>
                        <span className="text-muted-foreground">
                          danh mục cha: {c.parent}
                        </span>
                      </div>
                      <div className="flex items-center justify-start gap-2 text-muted-foreground">
                        <Package className="text-muted-foreground" />
                        <span className="text-muted-foreground">
                          {c.productCount} sản phẩm
                        </span>
                      </div>

                      <Button
                        className={`${c.status ? "bg-accent text-accent-foreground" : "bg-secondary text-secondary-foreground"} px-3 py-2 size-fit capitalize`}
                        variant={"outline"}
                        size={"icon"}
                      >
                        {c.status ? "hiển thị" : "ẩn"}
                      </Button>
                    </div>
                  </div>

                  {/* Chức năng */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant={"outline"}>
                        <Pencil />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-fit flex flex-col gap-1"
                      side="bottom"
                      align="end"
                    >
                      <DropdownMenuItem>
                        <Eye />
                        Xem chi tiết
                      </DropdownMenuItem>

                      <DropdownMenuItem>
                        <Pencil />
                        Chỉnh sửa
                      </DropdownMenuItem>

                      <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                        <CategoryDeleteModal />
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <CategoryPagination />
    </div>
  );
}
