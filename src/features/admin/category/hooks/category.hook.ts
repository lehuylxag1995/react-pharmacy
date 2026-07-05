import type { IGetCategoryQueries } from "@/interfaces/category.interface";
import { useMutation, useQuery } from "@tanstack/react-query";
import { categoryApi } from "../api/category.api";
import type { CreateCategoryType } from "../schemas/category.schema";

// Quản lý Query Key tập trung để dễ dàng xóa cache (invalidate)
export const categoryKeys = {
  all: ["categories"] as const,
  categories: () => [...categoryKeys.all, "list"] as const,
  categoryWithQuery: (filters: IGetCategoryQueries) =>
    [...categoryKeys.all, "withQueries", filters] as const,
  createCategory: () => [...categoryKeys.all, "create"] as const,
  detail: (id: number) => [...categoryKeys.all, "detail", id] as const, // -> ["categories", "detail", 1],
};

// Hook lấy danh sách danh mục
export const useGetCategoryWithQueries = (queries: IGetCategoryQueries) => {
  return useQuery({
    queryKey: categoryKeys.categoryWithQuery(queries),
    queryFn: () => categoryApi.getCategoryWithQuery(queries),
    retry: false,
  });
};

export const useGetCategories = () => {
  return useQuery({
    queryKey: categoryKeys.categories(),
    queryFn: () => categoryApi.getCategories(),
  });
};

export const useCreateCategory = () => {
  return useMutation({
    mutationKey: categoryKeys.createCategory(),
    mutationFn: (data: CreateCategoryType) => categoryApi.createCategory(data),
  });
};

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

// export const useGetCategory = ({ id }: { id: number }) => {
//   return useQuery({
//     queryKey: categoryKeys.detail(id),
//     queryFn: () => categoryApi.getCategoryById({ id }),
//     enabled: !!id, // Chỉ tự động gọi API khi có id (id khác null/0)
//   });
// };
