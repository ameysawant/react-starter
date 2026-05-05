import FlightsLayout from "../../shared/layouts/FlightsLayout";
import FlightsPage from "../../modules/flights/pages/FlightsPage";

export const flightsRoutes = [
  {
    path: "/flights",
    element: <FlightsLayout />,
    children: [
      {
        index: true,
        element: <FlightsPage />,
      },
    ],
  },
];
