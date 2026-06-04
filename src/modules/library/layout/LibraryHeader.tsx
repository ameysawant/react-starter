import { Row, Col } from "@/shared/flexbox-grid/Index";
import { H2, P } from "@/shared/components/custom-ui/Typography";
import { LIBRARY_ROUTES } from "@/shared/constants/routes";
import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

const LibraryHeader = () => {
  const componentLinks = [
    {
      label: "Centered Modal",
      to: LIBRARY_ROUTES.centeredModal,
    },
    {
      label: "Scrollable Modal",
      to: LIBRARY_ROUTES.scrollableModal,
    },
  ];
  return (
    <>
      <Row>
        <Col>
          <Row>
            <Col>
              <Link to={LIBRARY_ROUTES.base}>
                <H2>Custom Shadcn/UI </H2>
              </Link>
              <P className="mb-4">These are the custom components built on top of the shadcn/ui library.</P>
            </Col>
            {componentLinks.map((link) => (
              <Col key={link.label}>
                <Link
                  to={link.to}
                  className="flex items-center justify-between border-b border-t border-gray-600 py-2 text-gray-300"
                >
                  {link.label} <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default LibraryHeader;
