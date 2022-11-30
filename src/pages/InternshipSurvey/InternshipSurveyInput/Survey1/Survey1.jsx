import { Button, Col, Input, Typography, Form } from "antd";

import { ReactComponent as AddIcon } from "assets/addIcon.svg";

import InternshipFormItemCard from "components/InternshipFormItemCard";
import AddNewInternshipFormContext from "context/AddNewInternshipFormContext";
import { useContext } from "react";

import "./Survey1.scss";

const { Title } = Typography;

const Survey1 = () => {
  const formContext = useContext(AddNewInternshipFormContext);
  const { internshipSurvey } = formContext;
  const { survey1 } = internshipSurvey;

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;

    formContext.setFormContext({
      ...formContext,
      internshipSurvey: {
        ...internshipSurvey,
        survey1: value,
      },
    });
  };

  return (
    <InternshipFormItemCard>
      <Col span={24} className="survey1__title">
        <Title level={4}>Survey 1</Title>
      </Col>
      <Col span={24} className="survey1__input">
        <Form.Item name="survey1" initialValue={survey1} style={{ marginBottom: 0 }}>
          <Input placeholder="Question" onChange={handleChange} />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Button className="survey1__button">
          <AddIcon /> Add Question
        </Button>
      </Col>
    </InternshipFormItemCard>
  );
};

export default Survey1;
