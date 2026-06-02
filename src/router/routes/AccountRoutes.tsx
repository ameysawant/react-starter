import AccountLayout from "@/shared/layouts/AccountLayout";
import AccountIndex from "@/modules/account/Index";
import { ACCOUNT_ROUTES } from "@/shared/constants/routes";

export const accountRoutes = [
  {
    path: ACCOUNT_ROUTES.base,
    element: <AccountLayout />,
    children: [
      {
        index: true,
        element: <AccountIndex />,
      },
    ],
  },
];
