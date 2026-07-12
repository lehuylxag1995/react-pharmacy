import { SelectItem } from "@/components/ui/select";
import type { ICategorySelect } from "@/features/admin/category/interfaces/category.interface";
import React from "react";

export function CategorySelectItemRecursive({
  categories,
  parentId,
  char,
}: {
  categories: ICategorySelect[];
  parentId: null | number;
  char: string;
}) {
  const currentCategory = categories.filter((c) => c.parentId === parentId);

  if (currentCategory.length === 0) return null;

  return (
    <>
      {currentCategory.map((c) => (
        <React.Fragment key={c.id}>
          <SelectItem key={c.id} value={String(c.id)}>
            {char}
            {c.name}
          </SelectItem>

          <CategorySelectItemRecursive
            categories={categories}
            parentId={c.id}
            char={char + "--"}
          />
        </React.Fragment>
      ))}
    </>
  );
}
