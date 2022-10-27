import { Col, Row } from "antd";
import Header from "./Header";
import Insights from "./Insights";

import "./Internships.scss";

const responsiveWidths = { lg: 24, xl: 24, xxl: 24 };

const Internships = () => {
  const renderHeader = () => {
    return (
      <Col {...responsiveWidths}>
        <Header />
      </Col>
    );
  };

  const renderInsights = () => {
    return (
      <Col {...responsiveWidths}>
        <Insights />
      </Col>
    );
  };

  return (
    <Row gutter={[0, 24]} className="internships">
      <Col {...responsiveWidths}>
        <Row justify="center" align="middle">
          {renderHeader()}
          {renderInsights()}
        </Row>
      </Col>
    </Row>
  );
};

export default Internships;
