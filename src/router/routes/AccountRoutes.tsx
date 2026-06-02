import AccountLayout from "@/shared/layouts/AccountLayout";
import AccountIndex from "@/modules/account/Index";

export const accountRoutes = [
  {
    path: "/account",
    element: <AccountLayout />,
    children: [
      {
        index: true,
        element: <AccountIndex />,
      },
    ],
  },
];
