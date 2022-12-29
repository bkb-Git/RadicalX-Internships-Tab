import { Col, notification, Row } from "antd";
import { useNavigate } from "react-router-dom";

import ApprenticeshipPost from "components/ApprenticeshipPost";
import MainContentHeader from "components/MainContentHeader";

import { addDoc, collection } from "firebase/firestore";
import { db } from "firebase";

import { defaultValue } from "context/AddNewApprenticeshipFormContext";

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
  const navigate = useNavigate();

  // Notification API //

  const [api, contextHolder] = notification.useNotification();

  // In this handle a new document is created and its reference stored in localStorage //

  const handleRoute = () => {
    const apprenticeshipCol = collection(db, "apprenticeships");
    addDoc(apprenticeshipCol, defaultValue)
      .then((value) => {
        localStorage.setItem("docId", value.id);
      })
      .then(() => navigate("add"))
      .catch((err) => api.error({ message: err.message, placement: "bottomLeft" }));
  };

  return (
    <Row className="apprenticeships">
      <Col {...responsiveWidths} className="apprenticeships__header">
        <MainContentHeader
          title="Apprenticeships"
          buttonTitle="Create New Apprenticeship"
          contextHolder={contextHolder}
          routeHandler={handleRoute}
        />
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
