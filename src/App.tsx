import { RouterProvider } from "react-router";
import ThemeInitializer from "@/shared/components/custom-ui/ThemeInitializer";
import { router } from "@/router/routes/Router";

const App = () => {
  return (
    <>
      <ThemeInitializer />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
