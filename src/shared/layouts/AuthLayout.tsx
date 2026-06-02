import { Outlet } from "react-router-dom";
import AuthHeader from "@/modules/auth/layout/AuthHeader";
import AuthFooter from "@/modules/auth/layout/AuthFooter";

const AuthLayout = () => {
  return (
    <>
      <AuthHeader />
      <main>
        <Outlet />
      </main>
      <AuthFooter />
    </>
  );
};

export default AuthLayout;
