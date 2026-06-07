import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const products = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    image: "https://picsum.photos/seed/product-1/200/200",
    sold: "1250",
    revenue: "18750000",
  },
  {
    id: 2,
    name: "Vitamin C 1000mg",
    image: "https://picsum.photos/seed/product-2/200/200",
    sold: "980",
    revenue: "14700000",
  },
  {
    id: 3,
    name: "Omega 3 Fish Oil",
    image: "https://picsum.photos/seed/product-3/200/200",
    sold: "850",
    revenue: "21250000",
  },
  {
    id: 4,
    name: "Sữa Rửa Mặt Cetaphil",
    image: "https://picsum.photos/seed/product-4/200/200",
    sold: "720",
    revenue: "10800000",
  },
  {
    id: 5,
    name: "Khẩu Trang Y Tế",
    image: "https://picsum.photos/seed/product-5/200/200",
    sold: "2150",
    revenue: "6450000",
  },
];

export function TableBest() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-secondary/50">
          <TableHead>#</TableHead>
          <TableHead className="capitalize">sản phẩm</TableHead>
          <TableHead className="capitalize">đã bán</TableHead>
          <TableHead className="capitalize">doanh thu</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-foreground">
        {products.map((product) => (
          <TableRow
            key={product.id}
            className="transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
          >
            <TableCell className="text-foreground font-semibold">
              {product.id}
            </TableCell>
            <TableCell>
              <div className="flex gap-2 items-center font-semibold">
                <img
                  className="size-9 shrink-0"
                  src={product.image}
                  alt={product.name}
                />
                <span className="truncate">{product.name}</span>
              </div>
            </TableCell>
            <TableCell>{product.sold}</TableCell>
            <TableCell>{product.revenue} đ</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
