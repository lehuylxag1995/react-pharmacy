import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
import { NavLink, useSearchParams } from "react-router";
import { useBreadcrumb } from "../hooks/breadcrumb.hook";

// Khi danh mục không có con thì sẽ là breadcrumpage
// Khi danh mục còn con thì sẽ là breadcrumLink

// const menu = {
//   id: 10,
//   name: "Siro ho ABC",
//   breadcrumbs: [
//     {
//       id: 1,
//       name: "Hô hấp",
//     },
//     {
//       id: 5,
//       name: "Thuốc ho",
//     },
//     {
//       id: 10,
//       name: "Siro ho ABC",
//     },
//   ],
// };

export default function BreadcrumbAdmin() {
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  const { data, isLoading, isError, error } = useBreadcrumb({ id });

  if (!id) {
    return (
      <Breadcrumb>
        <BreadcrumbList className="text-primary text-base font-bold capitalize">
          <BreadcrumbItem>
            <NavLink to="/admin/categories">Danh mục</NavLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.error.message}</div>;
  }

  if (data?.success && data.data) {
    const info = data.data;

    return (
      <Breadcrumb>
        <BreadcrumbList className="text-primary text-base font-bold capitalize">
          <BreadcrumbItem>
            <NavLink to="/admin/categories">Danh mục</NavLink>
          </BreadcrumbItem>

          {info.breadcrumbs.map((b, i) => {
            const isLast = i === info.breadcrumbs.length - 1;

            return (
              <React.Fragment key={b.id}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>{b.name}</BreadcrumbPage>
                  ) : (
                    <NavLink to={`/admin/categories?id=${b.id}`}>
                      {b.name}
                    </NavLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    );
  }
}
