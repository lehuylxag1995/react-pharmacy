import { Check } from "lucide-react";
import CategoryHeader from "../components/CategoryHeader";

export default function CategoryAddSuccessPage() {
  return (
    <>
      <CategoryHeader route="/admin/category/add" />

      <hr />

      <div className="px-4 py-5 bg-card text-card-foreground">
        <div className="flex flex-col">
          {/* thông báo */}
          <div className="flex flex-col items-center justify-center gap-3 px-5 py-10 bg-accent text-accent-foreground">
            <Check className="size-10 rounded-full bg-primary text-primary-foreground p-1" />
            <h3 className="font-bold text-lg text-center">
              Thêm danh mục thành công
            </h3>
            <p className="text-center text-pretty text-muted-foreground text-sm">
              Danh mục{" "}
              <span className="font-semibold">"Vitamin và khoáng chất"</span> đã
              được tạo thành công
            </p>
          </div>
        </div>
      </div>

      <hr />

      <div className="px-4 py-5 flex flex-col bg-card text-card-foreground">
        <h3 className="text-xl font-bold pb-10">Thông tin danh mục</h3>

        <div className="grid grid-cols-2 gap-3">
          <span className="text-foreground font-semibold">Tên danh mục</span>
          <span className="text-right font-medium text-muted-foreground">
            Vitamin và khoáng chất
          </span>

          <span className="text-foreground font-semibold">Danh mục cha</span>
          <span className="text-right font-medium text-muted-foreground">
            Thực phẩm chức năng
          </span>

          <span className="text-foreground font-semibold">Mô tả</span>
          <span className="text-pretty font-medium text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            eos quas, perferendis obcaecati provident, perspiciatis officia
            culpa non repellat, molestias facere neque consequatur impedit!
            Similique voluptatibus nisi nesciunt blanditiis voluptas?
          </span>

          <span className="text-foreground font-semibold">Thứ tự hiển thị</span>
          <span className="text-right font-medium text-muted-foreground">
            3
          </span>

          <span className="text-foreground font-semibold">Trạng thái</span>
          <span className="text-right font-medium text-muted-foreground">
            <span className="bg-accent text-accent-foreground px-2 py-1 rounded border border-primary text-sm">
              Hiển thị
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
