import { ThemeProvider } from "@/components/theme-provider";
import { RouterProvider } from "react-router";
import { router } from "./routers/index.route";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
