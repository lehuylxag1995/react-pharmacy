import { useQuery } from "@tanstack/react-query";
import { categoryApi } from "./category.api";

// Quản lý Query Key tập trung để dễ dàng xóa cache (invalidate)
export const categoryKeys = {
  all: ["categories"] as const,
  lists: () => [...categoryKeys.all, "list"] as const, // -> ["categories", "list"]
  detail: (id: number) => [...categoryKeys.all, "detail", id] as const, // -> ["categories", "detail", 1]
};

// Hook lấy danh sách danh mục
export const useGetCategories = () => {
  return useQuery({
    queryKey: categoryKeys.lists(),
    queryFn: categoryApi.getAll,
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
