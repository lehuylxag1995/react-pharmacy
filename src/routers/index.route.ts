import { createBrowserRouter } from "react-router";
import CategoryPage from "../features/admin/category/category.page";
import DashboardPage from "../features/admin/dashboard/dashboard.page";
import RegisterPage from "../features/auth/register/register.page";
import SignInPage from "../features/auth/sign-in/sign-in.page";
import HomePage from "../features/user/home/home.page";
import AdminLayout from "../layouts/AdminLayout";
import AuthLayout from "../layouts/AuthLayout";
import UserLayout from "../layouts/UserLayout";

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
      { path: "category", Component: CategoryPage },
    ],
  },
]);
