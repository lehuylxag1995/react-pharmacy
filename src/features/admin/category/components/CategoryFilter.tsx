import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Funnel, RotateCcw, Search } from "lucide-react";

export function CategoryFilter() {
  return (
    <>
      {/* lọc theo tên */}
      <InputGroup className="w-full">
        <InputGroupInput placeholder="Tìm kiếm danh mục..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>

      <div className="flex gap-3">
        {/* lọc theo trạng thái  */}
        <Select defaultValue="2">
          <SelectTrigger className="w-2/3 ">
            <SelectValue placeholder="Tất cả trạng thái" />
          </SelectTrigger>
          <SelectContent className="capitalize">
            <SelectItem value="2">Tất cả trạng thái</SelectItem>
            <SelectItem value="1">Hiển thị</SelectItem>
            <SelectItem value="0">Ẩn</SelectItem>
          </SelectContent>
        </Select>

        {/* lọc nâng cao */}
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant={"secondary"} className="flex-1 flex">
              <Funnel />
              <span className="capitalize">bộ lọc</span>
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Bộ lọc trạng thái</DrawerTitle>
              <DrawerDescription>
                Lọc các thông tin bạn muốn hiển thị
              </DrawerDescription>
            </DrawerHeader>

            <div className="flex flex-col gap-5 items-start justify-center px-5">
              {/* parent for category */}
              <div className="flex flex-col gap-3 w-full">
                <span className="capitalize font-bold text-base">
                  danh mục cha
                </span>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Chọn danh mục cha" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Thuốc</SelectLabel>
                      <SelectItem value="1">Thuốc giảm đau</SelectItem>
                      <SelectItem value="2">Thuốc cảm cúm</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* order by name */}
              <div className="flex flex-col gap-3 w-full">
                <span className="capitalize font-bold text-base">
                  sắp xếp theo
                </span>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Tên danh mục (A-Z)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Từ A - Z </SelectItem>
                    <SelectItem value="2">Từ Z - A </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* actions */}
            </div>

            <DrawerFooter>
              <Button variant={"secondary"}>
                <RotateCcw />
                <span className="capitalize">đặt lại</span>
              </Button>
              <Button>
                <Funnel />
                <span className="capitalize">áp dụng</span>
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
