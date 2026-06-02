import AuthLayout from "@/shared/layouts/AuthLayout";
import AuthIndex from "@/modules/auth/Index";
import { AUTH_ROUTES } from "@/shared/constants/routes";

export const authRoutes = [
  {
    path: AUTH_ROUTES.base,
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <AuthIndex />,
      },
    ],
  },
];
