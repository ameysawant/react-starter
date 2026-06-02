import AdminLayout from "@/shared/layouts/AdminLayout";
import AdminIndex from "@/modules/admin/Index";

export const adminRoutes = [
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminIndex />,
      },
    ],
  },
];
