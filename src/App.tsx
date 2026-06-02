import { RouterProvider } from "react-router";
import { router } from "@/router/routes/Router";
import { Button } from "./shared/components/shadcn-ui/button";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <div>
        <Button>Click me</Button>
      </div>
    </>
  );
};

export default App;
