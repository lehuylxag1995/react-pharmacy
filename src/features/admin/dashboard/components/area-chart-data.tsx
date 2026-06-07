import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Page A",
    doanhthu: 4000,
    chiphi: 2400,
  },
  {
    name: "Page B",
    doanhthu: 3000,
    chiphi: 1398,
  },
  {
    name: "Page C",
    doanhthu: 2000,
    chiphi: 9800,
  },
  {
    name: "Page D",
    doanhthu: 2780,
    chiphi: 3908,
  },
  {
    name: "Page E",
    doanhthu: 1890,
    chiphi: 4800,
  },
  {
    name: "Page F",
    doanhthu: 2390,
    chiphi: 3800,
  },
  {
    name: "Page G",
    doanhthu: 3490,
    chiphi: 4300,
  },
];

const chartConfig = {
  doanhthu: {
    label: "Doanh Thu: ",
    color: "var(--chart-1)",
  },
  chiphi: {
    label: "Chi Phí: ",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export default function AreaChartExample() {
  return (
    <ChartContainer config={chartConfig} className="min-h-70 w-full lg:h-full">
      <AreaChart
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 0,
        }}
        onContextMenu={(_, e) => e.preventDefault()}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name" tickMargin={10} />
        <YAxis tickMargin={10} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area
          type="monotone"
          dataKey="doanhthu"
          stroke="var(--color-doanhthu)"
          fill="var(--color-doanhthu)"
          fillOpacity={0.1}
        />
        <Area
          type="monotone"
          dataKey="chiphi"
          stroke="var(--color-chiphi)"
          fill="var(--color-chiphi)"
          fillOpacity={0.1}
        />
      </AreaChart>
    </ChartContainer>
  );
}
