import {
  ArrowUpRight,
  BadgeDollarSign,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";
import AreaChartExample from "./components/area-chart-data";
import PieChartExample from "./components/pie-char-data";

export default function DashboardPage() {
  return (
    <div className="flex flex-col">
      {/* 4 thẻ tổng kết */}
      <div className="grid grid-cols-1 px-4 pt-4 gap-4 lg:grid-cols-4">
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

      {/* 2 bảng biểu đồ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 px-4 pt-4 gap-4">
        {/* Biểu đồ AreaChart  */}
        <div className="flex flex-col bg-card text-card-foreground rounded-xl p-5 shadow border border-border">
          <div className="flex flex-col gap-5">
            {/* Tiêu đề */}
            <span className="capitalize text-xl font-bold">doanh thu</span>

            {/* thời gian */}
            <div className="flex justify-between items-center gap-3 lg:justify-start">
              <button className="bg-primary text-primary-foreground px-5 py-2 rounded-md">
                7 ngày
              </button>
              <button className="bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground rounded-md px-5 py-2">
                30 ngày
              </button>
              <button className="bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground rounded-md px-5 py-2">
                90 ngày
              </button>
            </div>
          </div>

          {/* biểu đồ 1 */}
          <div className="flex-1 flex items-center justify-center w-full">
            <AreaChartExample />
          </div>
        </div>

        {/* Biểu đồ PieChart - kích thước co giãn tự động theo nội dung */}
        <div className="flex flex-col bg-card text-card-foreground rounded-xl p-5 shadow border border-border">
          {/* Tiêu đề */}
          <span className="capitalize text-xl font-bold mb-5  ">
            đơn hàng theo trạng thái
          </span>

          <div className="flex-1 flex items-center justify-center w-full">
            <PieChartExample />
          </div>
        </div>
      </div>

      {/* 2 bảng thường */}
      <div className="grid grid-cols-1 px-4 pt-4 gap-4"></div>
    </div>
  );
}
