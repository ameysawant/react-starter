import AdminLayout from "../../shared/layouts/AdminLayout";
import AdminPage from "../../modules/admin/pages/AdminPage";

export const adminRoutes = [
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
    ],
  },
];
