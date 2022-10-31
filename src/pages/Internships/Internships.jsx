import { Col, Row } from "antd";

import Header from "./Header";
import Insights from "./Insights";
import InternshipsList from "./InternshipsList";

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
    <Row className="internships">
      <Col {...responsiveWidths} className="internships__header">
        <Row justify="center" align="middle" style={{ height: "100%" }}>
          {renderHeader()}
          {renderInsights()}
        </Row>
      </Col>
      <Col {...responsiveWidths} className="internships__list">
        <InternshipsList />
      </Col>
    </Row>
  );
};

export default Internships;
