import { Outlet } from "react-router-dom";
import HotelsHeader from "../../modules/hotels/layout/HotelsHeader";
import HotelsFooter from "../../modules/hotels/layout/HotelsFooter";

const HotelsLayout = () => {
  return (
    <div>
      <HotelsHeader />
      <main>
        <Outlet />
      </main>
      <HotelsFooter />
    </div>
  );
};

export default HotelsLayout;
