import type { ApiError } from "@/types/backend.type";
import "@tanstack/react-query";

declare module "@tanstack/react-query" {
  interface Register {
    // Ép toàn bộ project sử dụng ApiError làm kiểu lỗi mặc định
    defaultError: ApiError;
  }
}
