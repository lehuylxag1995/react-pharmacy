import type { IGetCategoryQueries } from "@/features/admin/category/interfaces/category.interface";
import { useMutation, useQuery } from "@tanstack/react-query";
import { categoryApi } from "../api/category.api";
import type {
  CreateCategoryType,
  UpdateCategoryType,
} from "../schemas/category.schema";

// Quản lý Query Key tập trung để dễ dàng xóa cache (invalidate)
export const categoryKeys = {
  all: ["categories"] as const,
  lists: () => [...categoryKeys.all, "list"] as const,
  list: (queries: IGetCategoryQueries) =>
    [...categoryKeys.lists(), queries] as const,

  details: () => [...categoryKeys.all, "detail"] as const,
  detail: (id: number | null) =>
    [...categoryKeys.details(), "detail", id] as const,
  infoDelete: (id: number | null) =>
    [...categoryKeys.details(), "info-delete", id] as const,

  select: () => [...categoryKeys.all, "select"] as const,

  create: () => [...categoryKeys.all, "create"] as const,
  update: (id: number) => [...categoryKeys.all, "update", id] as const,
};

// Hook lấy danh sách danh mục
export const useCategories = (queries: IGetCategoryQueries) => {
  return useQuery({
    queryKey: categoryKeys.list(queries),
    queryFn: () => categoryApi.getList(queries),
  });
};

export const useCategory = (id: number | null) => {
  return useQuery({
    queryKey: categoryKeys.detail(id),
    queryFn: () => categoryApi.getById(id),
    enabled: id !== null, // Chỉ tự động gọi API khi có id (id khác null/0)
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

export const useUpdateCategory = (id: number) => {
  return useMutation({
    mutationKey: categoryKeys.update(id),
    mutationFn: (data: UpdateCategoryType) => categoryApi.update(id, data),
  });
};

export const useCategoryInfoDelete = (id: number | null) => {
  return useQuery({
    queryKey: categoryKeys.infoDelete(id),
    queryFn: () => categoryApi.getInfoDeteleById(id),
    enabled: id !== null,
  });
};
