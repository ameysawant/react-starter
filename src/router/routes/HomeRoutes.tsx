import HomeLayout from "@/shared/layouts/HomeLayout";
import HomeIndex from "@/modules/home/Index";

export const homeRoutes = [
  {
    path: "/home",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomeIndex />,
      },
    ],
  },
];
