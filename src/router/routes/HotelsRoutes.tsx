import HotelsLayout from "../../shared/layouts/HotelsLayout";
import HotelsPage from "../../modules/hotels/pages/HotelsPage";

export const hotelsRoutes = [
  {
    path: "/hotels",
    element: <HotelsLayout />,
    children: [
      {
        index: true,
        element: <HotelsPage />,
      },
    ],
  },
];
