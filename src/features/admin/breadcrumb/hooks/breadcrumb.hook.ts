import { useQuery } from "@tanstack/react-query";
import { breadcrumbApi } from "../api/breadcrumb.api";

export const breadcrumbKeys = {
  all: ["breadcrumb"] as const,
  categoryById: (id: number) => [...breadcrumbKeys.all, "category", id],
};

export const useBreadcrumb = ({ id }: { id: number }) => {
  return useQuery({
    queryKey: breadcrumbKeys.categoryById(id),
    queryFn: () => breadcrumbApi.callBreadcrumbByCategoryId(id),
    enabled: !!id,
  });
};
