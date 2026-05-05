import { Outlet } from "react-router-dom";
import FlightsHeader from "../../modules/flights/layout/FlightsHeader";
import FlightsFooter from "../../modules/flights/layout/FlightsFooter";

const FlightsLayout = () => {
  return (
    <div>
      <FlightsHeader />
      <main>
        <Outlet />
      </main>
      <FlightsFooter />
    </div>
  );
};

export default FlightsLayout;
