import { Outlet } from "react-router-dom";
import HomeHeader from "@/modules/home/layout/HomeHeader";
import HomeFooter from "@/modules/home/layout/HomeFooter";

const HomeLayout = () => {
  return (
    <>
      <HomeHeader />
      <main>
        <Outlet />
      </main>
      <HomeFooter />
    </>
  );
};

export default HomeLayout;
