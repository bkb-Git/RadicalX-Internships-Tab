import { Col, Input, Row } from "antd";

import ApprenticeshipFormItemCard from "components/ApprenticeshipFormItemCard";

import UploadProfileImg from "components/UploadProfileImg";

import "./ApprenticeshipTitleInput.scss";

const ApprenticeshipTitleInput = () => {
  return (
    <ApprenticeshipFormItemCard
      title="Company Logo & Apprenticeship Title"
      formName="title"
      className="apprenticeshipTitle"
    >
      <Row justify="start" align="middle">
        <Col span={2}>
          <UploadProfileImg />
        </Col>
        <Col span={22}>
          <Input placeholder="Enter  Apprenticeship Title" className="apprenticeshipTitle__input" />
        </Col>
      </Row>
    </ApprenticeshipFormItemCard>
  );
};

export default ApprenticeshipTitleInput;
