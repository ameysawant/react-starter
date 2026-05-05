import { Outlet } from "react-router-dom";
import AccountHeader from "../../modules/account/layout/AccountHeader";
import AccountFooter from "../../modules/account/layout/AccountFooter";

const AccountLayout = () => {
  return (
    <div>
      <AccountHeader />
      <main>
        <Outlet />
      </main>
      <AccountFooter />
    </div>
  );
};

export default AccountLayout;
