import CategoryAddPage from "@/features/admin/category/pages/CategoryAdd.page";
import CategoryAddSuccessPage from "@/features/admin/category/pages/CategoryAddSuccess.page";
import CategoryEditPage from "@/features/admin/category/pages/CategoryEdit.page";
import NotificationPage from "@/features/admin/notification/notification.page";
import OrderPage from "@/features/admin/order/order.page";
import ProductPage from "@/features/admin/product/product.page";
import UserPage from "@/features/admin/user/user.page";
import { createBrowserRouter } from "react-router";
import AdminLayout from "../components/admin/AdminLayout";
import AuthLayout from "../components/auth/AuthLayout";
import UserLayout from "../components/user/UserLayout";
import CategoryListPage from "../features/admin/category/pages/CategoryList.page";
import DashboardPage from "../features/admin/dashboard/dashboard.page";
import RegisterPage from "../features/auth/register/register.page";
import SignInPage from "../features/auth/sign-in/sign-in.page";
import HomePage from "../features/user/home/home.page";

export const router = createBrowserRouter([
  {
    Component: UserLayout,
    children: [{ index: true, Component: HomePage }],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      { index: true, Component: SignInPage },
      { path: "register", Component: RegisterPage },
    ],
  },

  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: DashboardPage },
      {
        path: "categories",
        children: [
          {
            index: true,
            Component: CategoryListPage, // /admin/categories
          },
          {
            path: "add",
            Component: CategoryAddPage,
          },
          {
            path: "add/success",
            Component: CategoryAddSuccessPage,
          },
          {
            path: ":id/edit",
            Component: CategoryEditPage,
          },
        ],
      },

      { path: "orders", Component: OrderPage },
      { path: "products", Component: ProductPage },
      { path: "notifications", Component: NotificationPage },
      { path: "users", Component: UserPage },
    ],
  },
]);
