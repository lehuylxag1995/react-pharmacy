import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowUpRight,
  BadgeDollarSign,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex flex-col">
      {/* mobile - Chọn ngày xem thống kê */}
      <div className="md:hidden bg-sidebar text-sidebar-foreground w-full py-4 px-5 border-y border-border">
        <Select defaultValue="7">
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="7">7 Ngày qua</SelectItem>
              <SelectItem value="30">30 Ngày qua</SelectItem>
              <SelectItem value="90">90 Ngày qua</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* desktop - 4 thẻ tổng kết */}
      <div className="grid grid-cols-1 p-5 gap-3 md:grid-cols-4">
        <div className="flex items-center bg-card text-card-foreground rounded-xl p-5 shadow border border-border md:p-4">
          {/* thông tin thẻ */}
          <div className="w-4/5 flex flex-col gap-2">
            <span className="font-semibold text-foreground text-xl capitalize md:text-sm md:font-semibold">
              Doanh thu hôm nay
            </span>
            <span className="text-3xl font-bold mt-2 whitespace-nowrap md:text-xl md:font-bold md:mt-1">
              128,450,000
            </span>
            <div className="flex text-base md:text-xs gap-1">
              <ArrowUpRight className="size-6 md:size-4 text-primary" />
              <span className="text-primary font-bold">12.8% </span>
              <span className="text-muted-foreground">so với hôm qua</span>
            </div>
          </div>

          {/* icon */}
          <div className="flex-1 flex justify-center items-center">
            <div className="size-10 flex justify-center items-center bg-success/10 rounded-lg ">
              <BadgeDollarSign className="size-8 md:size-6 text-success" />
            </div>
          </div>
        </div>

        <div className="flex items-center bg-card text-card-foreground rounded-xl p-5 shadow border border-border md:p-4">
          {/* thông tin thẻ */}
          <div className="w-4/5 flex flex-col gap-2">
            <span className="font-semibold text-foreground text-xl capitalize md:text-sm md:font-semibold">
              đơn hàng hôm nay
            </span>
            <span className="text-3xl font-bold mt-2 whitespace-nowrap md:text-xl md:font-bold md:mt-1">
              256
            </span>
            <div className="flex text-base md:text-xs gap-1">
              <ArrowUpRight className="size-6 md:size-4 text-primary" />
              <span className="text-primary font-bold">8.2% </span>
              <span className="text-muted-foreground">so với hôm qua</span>
            </div>
          </div>

          {/* icon */}
          <div className="flex-1 flex justify-center items-center">
            <div className="size-10 flex justify-center items-center bg-info/10 rounded-lg ">
              <ShoppingCart className="size-8 md:size-6 text-info" />
            </div>
          </div>
        </div>

        <div className="flex items-center bg-card text-card-foreground rounded-xl p-5 shadow border border-border md:p-4">
          {/* thông tin thẻ */}
          <div className="w-4/5 flex flex-col gap-2">
            <span className="font-semibold text-foreground text-xl capitalize md:text-sm md:font-semibold">
              khách hàng mới
            </span>
            <span className="text-3xl font-bold mt-2 whitespace-nowrap md:text-xl md:font-bold md:mt-1">
              98
            </span>
            <div className="flex text-base md:text-xs gap-1">
              <ArrowUpRight className="size-6 md:size-4 text-primary" />
              <span className="text-primary font-bold">15.7% </span>
              <span className="text-muted-foreground">so với hôm qua</span>
            </div>
          </div>

          {/* icon */}
          <div className="flex-1 flex justify-center items-center">
            <div className="size-10 flex justify-center items-center bg-special/10 rounded-lg ">
              <Users className="size-8 md:size-6 text-special" />
            </div>
          </div>
        </div>

        <div className="flex items-center bg-card text-card-foreground rounded-xl p-5 shadow border border-border md:p-4">
          {/* thông tin thẻ */}
          <div className="w-4/5 flex flex-col gap-2">
            <span className="font-semibold text-foreground text-xl capitalize md:text-sm md:font-semibold">
              sản phẩm bán chạy
            </span>
            <span className="text-3xl font-bold mt-2 whitespace-nowrap md:text-xl md:font-bold md:mt-1">
              356
            </span>
            <div className="flex text-base md:text-xs gap-1">
              <ArrowUpRight className="size-6 md:size-4 text-primary" />
              <span className="text-primary font-bold">10.3% </span>
              <span className="text-muted-foreground">so với hôm qua</span>
            </div>
          </div>

          {/* icon */}
          <div className="flex-1 flex justify-center items-center">
            <div className="size-10 flex justify-center items-center bg-warning/10 rounded-lg ">
              <Package className="size-8 md:size-6 text-warning" />
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
