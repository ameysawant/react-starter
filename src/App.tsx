import { RouterProvider } from "react-router";
import { router } from "@/router/routes/Router";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
