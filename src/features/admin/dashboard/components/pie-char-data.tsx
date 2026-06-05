import {
  ChartContainer,
  ChartLegend,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Pie, PieChart } from "recharts";

const chartConfig = {
  pending: {
    label: "Chờ xác nhận",
    color: "var(--chart-1)",
  },

  processing: {
    label: "Đang xử lý",
    color: "var(--chart-2)",
  },

  shipping: {
    label: "Đang giao hàng",
    color: "var(--chart-3)",
  },

  delivered: {
    label: "Đã giao",
    color: "var(--chart-4)",
  },

  cancelled: {
    label: "Đã hủy",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

const chartData = [
  {
    status: "pending",
    value: 300,
    fill: "var(--color-pending)",
  },
  {
    status: "processing",
    value: 300,
    fill: "var(--color-processing)",
  },
  {
    status: "shipping",
    value: 300,
    fill: "var(--color-shipping)",
  },
  {
    status: "delivered",
    value: 200,
    fill: "var(--color-delivered)",
  },
  {
    status: "cancelled",
    value: 250,
    fill: "var(--color-cancelled)",
  },
];

export default function PieChartExample() {
  return (
    <ChartContainer config={chartConfig} className="min-h-50 w-full lg:h-full">
      <PieChart accessibilityLayer>
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <ChartLegend
          layout="vertical"
          align="right"
          verticalAlign="middle"
          content={({ payload }) => (
            <div className="flex flex-col gap-3 pl-4">
              {payload?.map((p: any) => {
                const config = chartConfig[p.value as keyof typeof chartConfig];

                return (
                  <div
                    key={p.value}
                    className="flex justify-between gap-2 text-sm whitespace-nowrap"
                  >
                    <div className="flex items-center gap-2">
                      {/* Chấm màu đầu dòng */}
                      <div
                        className="size-3 shrink-0 rounded-xs"
                        style={{ backgroundColor: p.color }}
                      />

                      {/* Tên trạng thái (Tiếng Việt) */}
                      <span className="text-muted-foreground">
                        {config?.label}:
                      </span>
                    </div>

                    {/* Số liệu lấy từ data gốc (entry.payload.value) */}
                    <span className="font-mono font-semibold">
                      {p.payload?.value}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        />
        <Pie
          data={chartData}
          dataKey={"value"}
          nameKey={"status"}
          innerRadius="70%"
          outerRadius="100%"
          cornerRadius={4}
          paddingAngle={3}
        />
      </PieChart>
    </ChartContainer>
  );
}
