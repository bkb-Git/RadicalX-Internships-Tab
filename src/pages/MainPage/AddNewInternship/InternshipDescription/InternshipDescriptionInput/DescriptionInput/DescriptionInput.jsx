import { Col, Typography, Form, Input } from "antd";
import InternshipFormItemCard from "components/InternshipFormItemCard";
import { AddNewInternshipFormContext } from "context/AddNewInternshipFormContext";
import { useContext } from "react";

import "./DescriptionInput.scss";

const { Title } = Typography;
const { TextArea } = Input;

const DescriptionInput = () => {
  const formContext = useContext(AddNewInternshipFormContext);
  const { internshipDescription } = formContext;
  const { description } = internshipDescription;

  const handleChange = (e) => {
    formContext.setFormContext({
      ...formContext,
      internshipDescription: {
        ...internshipDescription,
        description: e.currentTarget.value,
      },
    });
  };

  return (
    <InternshipFormItemCard>
      <Col span={24}>
        <Title level={4}>Description</Title>
      </Col>
      <Col span={24} className="descriptionInput">
        <Form.Item name="description" initialValue={description}>
          <TextArea onChange={handleChange} placeholder="Description" rows={6} className="descriptionInput__textArea" />
        </Form.Item>
      </Col>
    </InternshipFormItemCard>
  );
};

export default DescriptionInput;
