import { useContext } from "react";
import { Col, Typography, Form, Input, Button } from "antd";

import InternshipFormItemCard from "components/InternshipFormItemCard";
import { AddNewInternshipFormContext } from "context/AddNewInternshipFormContext";

import { ReactComponent as AddIcon } from "assets/addIcon.svg";

import "./Survey2.scss";

const { Title } = Typography;

const Survey2 = () => {
  const formContext = useContext(AddNewInternshipFormContext);
  const { internshipSurvey } = formContext;
  const { survey2 } = internshipSurvey;

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;

    formContext.setFormContext({
      ...formContext,
      internshipSurvey: {
        ...internshipSurvey,
        survey2: value,
      },
    });
  };

  return (
    <InternshipFormItemCard>
      <Col span={24} className="survey2__title">
        <Title level={4}>Survey 2</Title>
      </Col>
      <Col span={24} className="survey2__input">
        <Form.Item name="survey2" initialValue={survey2} style={{ marginBottom: 0 }}>
          <Input placeholder="Question" onChange={handleChange} />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Button className="survey2__button">
          <AddIcon /> Add Question
        </Button>
      </Col>
    </InternshipFormItemCard>
  );
};

export default Survey2;
