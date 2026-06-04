import { Outlet } from "react-router-dom";
import LibraryHeader from "@/modules/library/layout/LibraryHeader";
import LibraryFooter from "@/modules/library/layout/LibraryFooter";

const LibraryLayout = () => {
  return (
    <>
      <LibraryHeader />
      <main>
        <Outlet />
      </main>
      <LibraryFooter />
    </>
  );
};

export default LibraryLayout;
