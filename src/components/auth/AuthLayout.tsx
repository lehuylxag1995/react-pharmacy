import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <main>
      {/* will either be <Home> or <Settings> */}
      <Outlet />
    </main>
  );
}
