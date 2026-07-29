import { NavLink, useSearchParams } from "react-router";

import CategoryDialogDelete from "../components/CategoryDialogDelete";
import CategoryListEmpty from "../components/CategoryListEmpty";
import CategoryListMobileActions from "../components/CategoryListMobileActions";
import CategoryListMobileError from "../components/CategoryListMobileError";
import CategoryListMobileLoading from "../components/CategoryListMobileLoading";
import CategoryListMobileName from "../components/CategoryListMobileName";
import { useCategories } from "../hooks/category.hook";

export const categories = [
  {
    id: 1,
    parentId: null,
    name: "Thuốc",
    isActive: true,
    childrenCount: 4,
  },
  {
    id: 2,
    parentId: null,
    name: "Thực phẩm chức năng",
    isActive: true,
    childrenCount: 3,
  },
  {
    id: 3,
    parentId: null,
    name: "Chăm sóc cá nhân",
    isActive: false,
    childrenCount: 2,
  },
];

export default function CategoryListMobile() {
  const [searchParams] = useSearchParams();

  const idParam = Number(searchParams.get("id")) || 0;
  const searchParam = searchParams.get("name") || "";
  const statusParam = Number(searchParams.get("status")) || 3;
  const sortByParam = Number(searchParams.get("sortBy")) || 1;

  const { data, isError, isLoading, error } = useCategories({
    id: idParam,
    name: searchParam,
    sortBy: sortByParam,
    status: statusParam,
  });

  if (isLoading) return <CategoryListMobileLoading />;

  if (isError) return <CategoryListMobileError error={error} />;

  if (data?.data) {
    return (
      <>
        {data?.data.map((c) => {
          // 1. Kiểm tra xem có danh mục con hay không
          const hasChildren = c.childrenCount > 0;

          return (
            <div key={c.id} className="flex items-center w-full rounded-xl">
              {hasChildren ? (
                <NavLink
                  to={`/admin/categories?id=${c.id}`}
                  className="flex items-center gap-3 flex-1 py-3 px-2 rounded-xl select-none transition-colors duration-150 active:bg-accent cursor-pointer"
                >
                  <CategoryListMobileName c={c} />
                </NavLink>
              ) : (
                <div className="flex items-center gap-3 flex-1 py-3 px-2 rounded-xl select-none transition-colors duration-150 cursor-default opacity-80">
                  <CategoryListMobileName c={c} />
                </div>
              )}

              <CategoryListMobileActions id={c.id} />
            </div>
          );
        })}

        <CategoryDialogDelete />
      </>
    );
  } else {
    return <CategoryListEmpty />;
  }
}
