import HomeLayout from "@/shared/layouts/HomeLayout";
import HomeIndex from "@/modules/home/Index";
import { HOME_ROUTES } from "@/shared/constants/routes";

export const homeRoutes = [
  {
    path: HOME_ROUTES.base,
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomeIndex />,
      },
    ],
  },
];
