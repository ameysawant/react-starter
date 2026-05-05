import ShopLayout from "../../shared/layouts/ShopLayout";
import ShopPage from "../../modules/shop/pages/ShopPage";

export const shopRoutes = [
  {
    path: "/shop",
    element: <ShopLayout />,
    children: [
      {
        index: true,
        element: <ShopPage />,
      },
    ],
  },
];
