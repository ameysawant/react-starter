import { Outlet } from "react-router-dom";
import ExperiencesHeader from "../../modules/experiences/layout/ExperiencesHeader";
import ExperiencesFooter from "../../modules/experiences/layout/ExperiencesFooter";

const ExperiencesLayout = () => {
  return (
    <div>
      <ExperiencesHeader />
      <main>
        <Outlet />
      </main>
      <ExperiencesFooter />
    </div>
  );
};

export default ExperiencesLayout;
