import ExperiencesLayout from "../../shared/layouts/ExperiencesLayout";
import ExperiencesPage from "../../modules/experiences/pages/ExperiencesPage";

export const experiencesRoutes = [
  {
    path: "/experiences",
    element: <ExperiencesLayout />,
    children: [
      {
        index: true,
        element: <ExperiencesPage />,
      },
    ],
  },
];
