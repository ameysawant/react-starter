import AuthLayout from "../../shared/layouts/AuthLayout";
import AuthPage from "../../modules/auth/pages/AuthPage";

export const authRoutes = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <AuthPage />,
      },
    ],
  },
];
