import CategoryAddPage from "@/features/admin/category/add/category.page";
import NotificationPage from "@/features/admin/notification/notification.page";
import OrderPage from "@/features/admin/order/order.page";
import ProductPage from "@/features/admin/product/product.page";
import UserPage from "@/features/admin/user/user.page";
import { createBrowserRouter } from "react-router";
import AdminLayout from "../components/admin/AdminLayout";
import AuthLayout from "../components/auth/AuthLayout";
import UserLayout from "../components/user/UserLayout";
import CategoryPage from "../features/admin/category/category.page";
import DashboardPage from "../features/admin/dashboard/dashboard.page";
import RegisterPage from "../features/auth/register/register.page";
import SignInPage from "../features/auth/sign-in/sign-in.page";
import HomePage from "../features/user/home/home.page";

export const router = createBrowserRouter([
  {
    path: "/",
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
        path: "category",
        Component: CategoryPage,
      },
      { path: "category/add", Component: CategoryAddPage },

      { path: "order", Component: OrderPage },
      { path: "product", Component: ProductPage },
      { path: "notification", Component: NotificationPage },
      { path: "user", Component: UserPage },
    ],
  },
]);
