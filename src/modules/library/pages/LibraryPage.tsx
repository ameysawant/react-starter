import { H5, P } from "@/shared/components/custom-ui/Typography";
import { Row, Col } from "@/shared/flexbox-grid/Index";
import { SiShadcnui } from "react-icons/si";

const LibraryPage = () => {
  return (
    <>
      <Row className="mt-4">
        <Col>
          <div className="flex items-center gap-2">
            <SiShadcnui /> <span className="text-2xl">Shadcn/UI</span>
          </div>
        </Col>
        <Col className="my-4">
          <H5>Customized Shadcn/UI Components</H5>
          <P>
            These are the custom components built on top of the shadcn/ui library. You can use these components in your
            projects. You can also add new custom components from Shadcn/UI as per your needs.
          </P>
        </Col>
        <Col className="mb-4">
          <H5>The Foundation for your Design System</H5>
          <P>
            A set of beautifully designed components that you can customize, extend, and build on. Start here then make
            it your own. Open Source. Open Code.
          </P>
        </Col>
      </Row>
    </>
  );
};

export default LibraryPage;
