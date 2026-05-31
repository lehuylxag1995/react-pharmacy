import { Outlet } from "react-router";

export default function AdminLayout() {
  return (
    <main>
      {/* will either be <Home> or <Settings> */}
      <Outlet />
    </main>
  );
}
