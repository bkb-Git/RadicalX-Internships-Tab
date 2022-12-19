import { Col, Row } from "antd";

import ApprenticeshipPost from "components/ApprenticeshipPost";
import MainContentHeader from "components/MainContentHeader";

import "./Apprenticeships.scss";

const responsiveWidths = { lg: 24, xl: 24, xxl: 24 };

const POSTS = [
  {
    title: "Mobile App Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magaliqua.",
    tags: ["Product Manager", "Product Designer", "Backend Developer", "Frontend Developer"],
    id: 1,
  },
  {
    title: "Web App Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magaliqua.",
    tags: ["Product Manager", "Product Designer", "Backend Developer", "Frontend Developer"],
    id: 2,
  },
];

const Apprenticeships = () => {
  const handleRoute = () => {};

  return (
    <Row className="apprenticeships">
      <Col {...responsiveWidths} className="apprenticeships__header">
        <MainContentHeader title="Apprenticeships" buttonTitle="Create New Apprenticeship" routeHandler={handleRoute} />
      </Col>
      <Col {...responsiveWidths} className="apprenticeships__content">
        <Row gutter={[20, 0]} style={{ height: "100%" }} justify="start" align="top">
          {POSTS.map((post) => (
            <ApprenticeshipPost data={post} key={post.id} />
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default Apprenticeships;
