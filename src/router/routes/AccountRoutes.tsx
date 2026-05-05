import AccountLayout from "../../shared/layouts/AccountLayout";
import AccountPage from "../../modules/account/pages/AccountPage";

export const accountRoutes = [
  {
    path: "/account",
    element: <AccountLayout />,
    children: [
      {
        index: true,
        element: <AccountPage />,
      },
    ],
  },
];
