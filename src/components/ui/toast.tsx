import { CircleCheck, CircleX, Info, TriangleAlert, X } from "lucide-react";
import { toast } from "sonner";

type ToastType = "success" | "error" | "warning" | "info";

interface ToastProps {
  id: string | number;
  title: string;
  description?: string;
  type: ToastType;
  action?: {
    label: string;
    onClick: () => void;
  };
}

// Định nghĩa màu sắc và icon cho từng trạng thái
const toastTypes = {
  success: {
    bg: "bg-success border-success",
    text: "text-success-foreground",
    desc: "text-success-foreground",
    icon: <CircleCheck className="size-5 text-warning-foreground" />,
  },
  error: {
    bg: "bg-destructive border-destructive",
    text: "text-destructive-foreground",
    desc: "text-destructive-foreground",
    icon: <CircleX className="size-5 text-destructive-foreground" />,
  },
  warning: {
    bg: "bg-warning border-warning",
    text: "text-warning-foreground",
    desc: "text-warning-foreground",
    icon: <TriangleAlert className="size-5 text-warning-foreground" />,
  },
  info: {
    bg: "bg-info border-info",
    text: "text-info-foreground",
    desc: "text-info-foreground",
    icon: <Info className="size-5 text-info-foreground" />,
  },
};

//Định nghĩa giao diện toast
function ToastContent(props: ToastProps) {
  const { id, description, title, type = "info" } = props;
  const config = toastTypes[type];

  return (
    <div
      className={`${config.bg} flex w-full p-4 rounded-xl shadow-lg border bg-opacity-95 transition-all duration-300 backdrop-blur-sm`}
    >
      {/* Icon bên trái */}
      <div className="shrink-0 mr-3">{config.icon}</div>

      {/* Nút đóng Text */}
      <div className="flex-1 min-w-0">
        <p className={`${config.text} font-semibold text-sm leading-5`}>
          {title}
        </p>
        {description && (
          <p className={`${config.desc} mt-1 text-xs leading-4 truncate`}>
            {description}
          </p>
        )}
      </div>

      {/* Nút đóng (X) */}
      <button
        onClick={() => toast.dismiss(id)}
        className="shrink-0 ml-4 inline-flex text-white/90 hover:text-white focus:outline-none transition-colors"
      >
        <X className="size-4" />
      </button>
    </div>
  );
}

export const toastMobile = {
  error: (title: string, description?: string) =>
    toast.custom(
      (id) => ToastContent({ id, title, description, type: "error" }),
      { position: "top-center", duration: 3000 },
    ),
  success: (title: string, description?: string) =>
    toast.custom(
      (id) => ToastContent({ id, description, title, type: "success" }),
      { position: "top-center", duration: 3000 },
    ),
  info: (title: string, description?: string) =>
    toast.custom(
      (id) => ToastContent({ id, description, title, type: "info" }),
      { position: "top-center", duration: 3000 },
    ),
  warning: (title: string, description?: string) =>
    toast.custom(
      (id) => ToastContent({ id, description, title, type: "warning" }),
      { position: "top-center", duration: 3000 },
    ),
};

export const toastDesktop = {
  error: (title: string, description: string) =>
    toast.custom(
      (id) => ToastContent({ id, title, description, type: "error" }),
      { position: "top-right", duration: 3000 },
    ),
  success: (title: string, description: string) =>
    toast.custom(
      (id) => ToastContent({ id, description, title, type: "success" }),
      { position: "top-right", duration: 3000 },
    ),
  info: (title: string, description: string) =>
    toast.custom(
      (id) => ToastContent({ id, description, title, type: "info" }),
      { position: "top-right", duration: 3000 },
    ),
  warning: (title: string, description: string) =>
    toast.custom(
      (id) => ToastContent({ id, description, title, type: "warning" }),
      { position: "top-right", duration: 3000 },
    ),
};
