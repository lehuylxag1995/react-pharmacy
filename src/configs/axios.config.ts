import type { ApiError } from "@/types/backend.type";
import axios, { type AxiosInstance, type AxiosResponse } from "axios";

export const axiosClient: AxiosInstance = axios.create({
  baseURL: "http://192.168.1.165:3000/api/v1",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosResponseInterceptor = axiosClient.interceptors.response.use(
  // 1. Xử lý khi API thành công (Status 2xx)
  (response: AxiosResponse) => response,

  // 2. Xử lý khi API thất bại (Status 4xx, 5xx...)
  (error: unknown) => {
    // Kiểm tra xem có đúng là lỗi do Axios bắn ra không
    if (axios.isAxiosError<ApiError>(error)) {
      if (error.response && error.response.data) {
        // Kiểm tra xem Server Hono có trả về data lỗi đúng cấu trúc không
        // Gói và chuyển tiếp chuẩn cục lỗi ApiError cho tầng tiếp theo (React Query)
        return Promise.reject(error.response.data);
      }
    }

    // Nếu không phải lỗi Axios, hoặc Axios mất mạng không có response
    const fallbackError: ApiError = {
      success: false,
      error: {
        code: "NETWORK_ERROR",
        message: "Axios - Interceptor không nhận được response từ Server !!!",
      },
    };
    return Promise.reject(fallbackError);
  },
);
