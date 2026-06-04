import LibraryLayout from "@/shared/layouts/LibraryLayout";
import LibraryIndex from "@/modules/library/Index";
import { LIBRARY_ROUTES } from "@/shared/constants/routes";

export const libraryRoutes = [
  {
    path: LIBRARY_ROUTES.base,
    element: <LibraryLayout />,
    children: [
      {
        index: true,
        element: <LibraryIndex />,
      },
    ],
  },
];
