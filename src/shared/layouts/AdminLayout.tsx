import { Outlet } from "react-router-dom";
import AdminHeader from "../../modules/admin/layout/AdminHeader";
import AdminFooter from "../../modules/admin/layout/AdminFooter";

const AdminLayout = () => {
  return (
    <div>
      <AdminHeader />
      <main>
        <Outlet />
      </main>
      <AdminFooter />
    </div>
  );
};

export default AdminLayout;
