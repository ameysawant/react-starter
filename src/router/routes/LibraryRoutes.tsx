import LibraryLayout from "@/shared/layouts/LibraryLayout";
import LibraryIndex from "@/modules/library/Index";
import { LIBRARY_ROUTES } from "@/shared/constants/routes";
import ScrollableModal from "@/modules/library/components/ScrollableModal";
import CenteredModal from "@/modules/library/components/CenteredModal";

export const libraryRoutes = [
  {
    path: LIBRARY_ROUTES.base,
    element: <LibraryLayout />,
    children: [
      {
        index: true,
        element: <LibraryIndex />,
      },
      {
        path: LIBRARY_ROUTES.centeredModal,
        element: <CenteredModal />,
      },
      {
        path: LIBRARY_ROUTES.scrollableModal,
        element: <ScrollableModal />,
      },
    ],
  },
];
