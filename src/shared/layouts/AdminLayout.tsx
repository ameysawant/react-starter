import { Outlet } from "react-router-dom";
import AdminHeader from "@/modules/admin/layout/AdminHeader";
import AdminFooter from "@/modules/admin/layout/AdminFooter";

const AdminLayout = () => {
  return (
    <>
      <AdminHeader />
      <main>
        <Outlet />
      </main>
      <AdminFooter />
    </>
  );
};

export default AdminLayout;
