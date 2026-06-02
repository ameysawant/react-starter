import AdminLayout from "@/shared/layouts/AdminLayout";
import AdminIndex from "@/modules/admin/Index";
import { ADMIN_ROUTES } from "@/shared/constants/routes";

export const adminRoutes = [
  {
    path: ADMIN_ROUTES.base,
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminIndex />,
      },
    ],
  },
];
