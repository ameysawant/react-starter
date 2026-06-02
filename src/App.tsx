import { RouterProvider } from "react-router";
import { router } from "@/router/routes/Router";
import { Button } from "./shared/components/shadcn-ui/button";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Button>Click me</Button>
    </>
  );
};

export default App;
