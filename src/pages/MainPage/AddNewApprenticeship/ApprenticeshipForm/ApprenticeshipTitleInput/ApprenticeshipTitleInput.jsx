import { useContext } from "react";
import { Col, Input, Row } from "antd";

import { AddNewApprenticeshipFormContext } from "context/AddNewApprenticeshipFormContext";

import ApprenticeshipFormItemCard from "components/ApprenticeshipFormItemCard";

import UploadProfileImg from "components/UploadProfileImg";

import "./ApprenticeshipTitleInput.scss";

const ApprenticeshipTitleInput = () => {
  const formContext = useContext(AddNewApprenticeshipFormContext);
  const { setFormContext, loading, title, ...otherValues } = formContext;

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;

    setFormContext({ title: value, ...otherValues });
  };

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
          <Input
            placeholder="Enter  Apprenticeship Title"
            className="apprenticeshipTitle__input"
            onChange={handleChange}
          />
        </Col>
      </Row>
    </ApprenticeshipFormItemCard>
  );
};

export default ApprenticeshipTitleInput;
