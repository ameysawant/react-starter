import { APP_ROUTES } from "@/shared/constants/routes";
import ShopIndex from "@/modules/shop/Index";
import ShopLayout from "@/shared/layouts/ShopLayout";

export const AppRoutes = [
  {
    path: APP_ROUTES.base,
    element: <ShopLayout />,
    children: [
      {
        index: true,
        element: <ShopIndex />,
      },
    ],
  },
];
