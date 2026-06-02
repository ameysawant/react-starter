import AuthLayout from "@/shared/layouts/AuthLayout";
import AuthIndex from "@/modules/auth/Index";

export const authRoutes = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <AuthIndex />,
      },
    ],
  },
];
