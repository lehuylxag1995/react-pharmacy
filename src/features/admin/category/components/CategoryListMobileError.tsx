import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import type { ApiError } from "@/types/backend.type";
import { AlertCircleIcon } from "lucide-react";

export default function CategoryListMobileError({
  error,
}: {
  error: ApiError;
}) {
  return (
    <>
      <span className="text-destructive bg-destructive/10 text-center rounded py-2 px-1">
        {error.error.message}
      </span>
      {error.error.details?.map((e) => (
        <Alert variant="destructive" className="w-full">
          <AlertCircleIcon />
          <AlertTitle>{e.field}</AlertTitle>
          <AlertDescription>{e.message}</AlertDescription>
        </Alert>
      ))}
    </>
  );
}
