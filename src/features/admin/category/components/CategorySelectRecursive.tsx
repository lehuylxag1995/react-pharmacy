import { SelectItem } from "@/components/ui/select";
import type { ICategorySelect } from "@/features/admin/category/interfaces/category.interface";
import React from "react";

export function CategorySelectItemRecursive({
  categoriesSelect,
  parentId,
  char,
  excludeId,
}: {
  categoriesSelect: ICategorySelect[];
  parentId: null | number;
  char: string;
  excludeId?: number;
}) {
  const currentCategory = categoriesSelect.filter(
    (c) => c.parentId === parentId,
  );

  if (currentCategory.length === 0) return null;

  return (
    <>
      {currentCategory.map((c) => (
        <React.Fragment key={c.id}>
          <SelectItem
            key={c.id}
            value={String(c.id)}
            disabled={c.id === excludeId}
          >
            {char}
            {c.name}
          </SelectItem>

          <CategorySelectItemRecursive
            categoriesSelect={categoriesSelect}
            parentId={c.id}
            char={char + "--"}
            excludeId={excludeId}
          />
        </React.Fragment>
      ))}
    </>
  );
}
