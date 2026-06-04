import { createBrowserRouter } from "react-router";
import { homeRoutes } from "@/router/routes/HomeRoutes";
import { authRoutes } from "@/router/routes/AuthRoutes";
import { adminRoutes } from "@/router/routes/AdminRoutes";
import { accountRoutes } from "@/router/routes/AccountRoutes";
import { libraryRoutes } from "@/router/routes/LibraryRoutes";
import PageNotFound from "@/shared/components/feedback/PageNotFound";

export const router = createBrowserRouter([
  ...homeRoutes,
  ...authRoutes,
  ...adminRoutes,
  ...accountRoutes,
  ...libraryRoutes,
  { path: "*", element: <PageNotFound /> },
]);
