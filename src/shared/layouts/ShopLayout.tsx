import { Outlet } from "react-router-dom";
import ShopHeader from "../../modules/shop/layout/ShopHeader";
import ShopFooter from "../../modules/shop/layout/ShopFooter";

const ShopLayout = () => {
  return (
    <div>
      <ShopHeader />
      <main>
        <Outlet />
      </main>
      <ShopFooter />
    </div>
  );
};

export default ShopLayout;
