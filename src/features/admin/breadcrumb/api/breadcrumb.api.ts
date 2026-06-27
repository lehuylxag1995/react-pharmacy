import { axiosClient } from "@/configs/axios.config";
import type { IBreadcrumb } from "@/interfaces/breadcrumb.interface";
import type { ApiSuccess } from "@/types/backend.type";

export const breadcrumbApi = {
  callBreadcrumbByCategoryId: async (id: number) => {
    const response = await axiosClient.get<ApiSuccess<IBreadcrumb>>(
      `/breadcrumbs/categories/${id}`,
    );
    return response.data;
  },
};
