import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { useDebounce } from "use-debounce";

export function CategoryFilter() {
  // sử dụng react-router để lấy tham số trên URL
  const [searchParams, setSearchParams] = useSearchParams();

  // lấy các tham số trên url hiện tại
  const searchParam = searchParams.get("search") || "";
  const statusParam = searchParams.get("status") || "3";
  const sortByParam = searchParams.get("sortBy") || "1";

  // tạo state cho search
  const [searchName, setSearchName] = useState(searchParam);

  // hook để người dùng gõ xong mới cập nhật lên URL
  const [debouncedSearchName] = useDebounce(searchName, 500);

  // dựa vào URL cập nhật state
  useEffect(() => {
    setSearchName(searchParam);
  }, [searchParam]);

  // Chờ debounced xong thì cập nhật URL lại tìm kiếm theo tên
  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (debouncedSearchName) {
      params.set("search", debouncedSearchName);
    } else {
      params.delete("search");
    }

    setSearchParams(params, { replace: true });
  }, [debouncedSearchName]);

  // lọc theo trạng thái
  const handleStatusChange = (value: string) => {
    const params = new URLSearchParams(searchParams);

    params.delete("status");
    if (value !== "3") params.set("status", value);

    setSearchParams(params, { replace: true });
  };

  // lọc theo thự tự
  const handleOrderChange = (value: string) => {
    const params = new URLSearchParams(searchParams);

    params.delete("sortBy");
    if (value !== "1") params.set("sortBy", value);

    setSearchParams(params, { replace: true });
  };

  return (
    <div className="flex flex-col gap-2">
      {/* lọc theo tên */}
      <InputGroup className="w-full">
        <InputGroupInput
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          placeholder="Tìm kiếm danh mục..."
        />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>

      <div className="flex gap-2">
        {/* trạng thái  */}
        <Select value={statusParam} onValueChange={handleStatusChange}>
          <SelectTrigger className="w-1/2">
            <SelectValue placeholder="Tất cả trạng thái" />
          </SelectTrigger>
          <SelectContent className="capitalize">
            <SelectItem value="3">Tất cả trạng thái</SelectItem>
            <SelectItem value="1">Hiển thị</SelectItem>
            <SelectItem value="2">Ẩn</SelectItem>
          </SelectContent>
        </Select>

        {/* sắp xếp */}
        <Select value={sortByParam} onValueChange={handleOrderChange}>
          <SelectTrigger className="w-1/2">
            <SelectValue placeholder="Sắp xếp" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Từ A - Z </SelectItem>
            <SelectItem value="2">Từ Z - A </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
