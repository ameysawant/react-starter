import { createBrowserRouter } from "react-router";
import { AppRoutes } from "@/router/routes/AppRoutes";
import { shopRoutes } from "@/router/routes/ShopRoutes";
import { authRoutes } from "@/router/routes/AuthRoutes";
import { hotelsRoutes } from "@/router/routes/HotelsRoutes";
import { flightsRoutes } from "@/router/routes/FlightsRoutes";
import { experiencesRoutes } from "@/router/routes/ExperiencesRoutes";
import { adminRoutes } from "@/router/routes/AdminRoutes";
import { accountRoutes } from "@/router/routes/AccountRoutes";
import PageNotFound from "../../shared/components/feedback/PageNotFound";

export const router = createBrowserRouter([
  ...AppRoutes,
  ...shopRoutes,
  ...authRoutes,
  ...hotelsRoutes,
  ...flightsRoutes,
  ...experiencesRoutes,
  ...adminRoutes,
  ...accountRoutes,
  { path: "*", element: <PageNotFound /> }
]);
