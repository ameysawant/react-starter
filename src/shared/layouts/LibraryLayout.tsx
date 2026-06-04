import { Outlet } from "react-router-dom";
import LibraryHeader from "@/modules/library/layout/LibraryHeader";
import { Container, Row, Col } from "@/shared/flexbox-grid/Index";

const LibraryLayout = () => {
  return (
    <>
      <Container xxxl className="py-4">
        <Row>
          <Col lg={4} xl={3} xxl={2}>
            <LibraryHeader />
          </Col>
          <Col lg={8} xl={9} xxl={10}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LibraryLayout;
