import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const orders = [
  {
    id: 1,
    nameUser: "Nguyễn Văn An",
    time: "05/06/2026 08:15",
    total: "350000",
    status: "Chờ xác nhận",
  },
  {
    id: 2,
    nameUser: "Trần Thị Bình",
    time: "05/06/2026 09:20",
    total: "1250000",
    status: "Đang xử lý",
  },
  {
    id: 3,
    nameUser: "Lê Minh Cường",
    time: "05/06/2026 10:05",
    total: "780000",
    status: "Đang giao",
  },
  {
    id: 4,
    nameUser: "Phạm Thu Dung",
    time: "05/06/2026 11:40",
    total: "2150000",
    status: "Hoàn thành",
  },
  {
    id: 5,
    nameUser: "Hoàng Quốc Huy",
    time: "05/06/2026 13:10",
    total: "490000",
    status: "Đã huỷ",
  },
];

// 1. Tạo một object chứa class màu sắc tương ứng với từng trạng thái
const statusStyles: Record<string, string> = {
  "Chờ xác nhận":
    "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 border-amber-200 dark:border-amber-900/50",
  "Đang xử lý":
    "bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 border-blue-200 dark:border-blue-900/50",
  "Đang giao":
    "bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-400 border-purple-200 dark:border-purple-900/50",
  "Hoàn thành":
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/50",
  "Đã huỷ":
    "bg-destructive/10 text-destructive dark:bg-destructive/20 border-destructive/20",
};

export function TableNewOrder() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-secondary/50 text-center">
          <TableHead className="capitalize">#</TableHead>
          <TableHead className="capitalize">khách hàng</TableHead>
          <TableHead className="capitalize">thời gian</TableHead>
          <TableHead className="capitalize">tổng tiền</TableHead>
          <TableHead className="capitalize">trạng thái</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-foreground">
        {orders.map((order) => (
          <TableRow
            key={order.id}
            className="transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
          >
            <TableCell className="font-semibold">{order.id}</TableCell>
            <TableCell>{order.nameUser}</TableCell>
            <TableCell>{order.time}</TableCell>
            <TableCell>
              {Number(order.total).toLocaleString("vi-VN")} đ
            </TableCell>
            <TableCell className="text-center">
              <span
                className={`w-full h-9 flex justify-center items-center px-2.5 py-1 rounded text-xs font-medium border
                    ${statusStyles[order.status] || "bg-muted text-muted-foreground"}`}
              >
                {order.status}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
