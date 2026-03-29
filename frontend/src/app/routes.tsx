import { createBrowserRouter, Navigate } from "react-router";
import { Auth } from "./pages/Auth";
import { Dashboard } from "./pages/Dashboard";
import { Analytics } from "./pages/Analytics";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/auth" replace />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/analytics",
    element: <Analytics />,
  },
  {
    path: "*",
    element: <Navigate to="/auth" replace />,
  },
]);