import { createBrowserRouter } from "react-router";
import { authRoutes } from "@/router/routes/AuthRoutes";
import { adminRoutes } from "@/router/routes/AdminRoutes";
import { accountRoutes } from "@/router/routes/AccountRoutes";
import PageNotFound from "../../shared/components/feedback/PageNotFound";

export const router = createBrowserRouter([
  ...authRoutes,
  ...adminRoutes,
  ...accountRoutes,
  { path: "*", element: <PageNotFound /> },
]);
