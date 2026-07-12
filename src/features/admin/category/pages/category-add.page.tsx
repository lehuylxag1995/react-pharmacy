import { toastCustom } from "@/components/ui/toast";
import { useNavigate } from "react-router";
import CategoryForm from "../components/CategoryForm";
import CategoryHeader from "../components/CategoryHeader";
import { useCategorySelect, useCreateCategory } from "../hooks/category.hook";
import { type CreateCategoryType } from "../schemas/category.schema";

export default function CategoryAddPage() {
  const { data, isLoading } = useCategorySelect();
  const { mutate, error: mutationError } = useCreateCategory();
  const navigate = useNavigate();

  function handleSubmit(data: CreateCategoryType) {
    mutate(data, {
      onSuccess: (response) => {
        navigate("/admin/categories/add/success", {
          state: {
            newCategory: response.data,
          },
        });
      },
      onError: (error) => {
        toastCustom.error("Lỗi!", error.error.message);
      },
    });
  }

  return (
    <div className="m-4 rounded-2xl shadow bg-card text-card-foreground ">
      <div className="px-4 py-3">
        <CategoryHeader route="/admin/categories" title="Quay về danh sách" />

        <div className=" flex flex-col  ">
          <CategoryForm
            onSubmit={handleSubmit}
            onCancel={() => navigate("/admin/categories")}
            submitText="Lưu danh mục"
            categories={data?.data}
            isLoadingCategories={isLoading}
            apiError={mutationError}
          />
        </div>
      </div>
    </div>
  );
}
