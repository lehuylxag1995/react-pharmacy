import type { IGetCategoryQueries } from "@/features/admin/category/interfaces/category.interface";
import { useMutation, useQuery } from "@tanstack/react-query";
import { categoryApi } from "../api/category.api";
import type { CreateCategoryType } from "../schemas/category.schema";

// Quản lý Query Key tập trung để dễ dàng xóa cache (invalidate)
export const categoryKeys = {
  all: ["categories"] as const,
  lists: () => [...categoryKeys.all, "list"] as const,
  list: (queries: IGetCategoryQueries) =>
    [...categoryKeys.lists(), queries] as const,

  details: () => [...categoryKeys.all, "detail"] as const,
  detail: (id: number) => [...categoryKeys.details(), "detail", id] as const,

  select: () => [...categoryKeys.all, "select"] as const,

  create: () => [...categoryKeys.all, "create"] as const,
};

// Hook lấy danh sách danh mục
export const useCategories = (queries: IGetCategoryQueries) => {
  return useQuery({
    queryKey: categoryKeys.list(queries),
    queryFn: () => categoryApi.getList(queries),
    retry: false,
  });
};

export const useCategory = (id: number) => {
  return useQuery({
    queryKey: categoryKeys.detail(id),
    queryFn: () => categoryApi.getById(id),
    enabled: !!id, // Chỉ tự động gọi API khi có id (id khác null/0)
  });
};

export const useCategorySelect = () => {
  return useQuery({
    queryKey: categoryKeys.select(),
    queryFn: () => categoryApi.getAll(),
  });
};

export const useCreateCategory = () => {
  return useMutation({
    mutationKey: categoryKeys.create(),
    mutationFn: (data: CreateCategoryType) => categoryApi.create(data),
  });
};
