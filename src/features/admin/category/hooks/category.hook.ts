import type { IGetCategoriesParams } from "@/interfaces/category.interface";
import { useQuery } from "@tanstack/react-query";
import { categoryApi } from "../api/category.api";

// Quản lý Query Key tập trung để dễ dàng xóa cache (invalidate)
export const categoryKeys = {
  all: ["categories"] as const,
  list: (filters: IGetCategoriesParams) =>
    [...categoryKeys.all, "list", filters] as const,
  detail: (id: number) => [...categoryKeys.all, "detail", id] as const, // -> ["categories", "detail", 1]
};

// Hook lấy danh sách danh mục
export const useGetCategories = (params: IGetCategoriesParams) => {
  return useQuery({
    queryKey: categoryKeys.list(params),
    queryFn: () => categoryApi.getCategories(params),
    retry: false,
  });
};

// export const useGetCategory = ({ id }: { id: number }) => {
//   return useQuery({
//     queryKey: categoryKeys.detail(id),
//     queryFn: () => categoryApi.getCategoryById({ id }),
//     enabled: !!id, // Chỉ tự động gọi API khi có id (id khác null/0)
//   });
// };

// Hook thêm danh mục
// export const usePostCategory = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: categoryApi.create,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: categoryKeys.lists() });
//     },
//   });
// };
