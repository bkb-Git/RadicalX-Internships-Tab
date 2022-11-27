import { useContext } from "react";
import { Col, Input, Typography, Form } from "antd";

import InternshipFormItemCard from "components/InternshipFormItemCard";
import AddNewInternshipFormContext from "context/AddNewInternshipFormContext";

import "./BenefitsInput.scss";

const { Title } = Typography;
const { TextArea } = Input;

const BenefitsInput = () => {
  const formContext = useContext(AddNewInternshipFormContext);
  const { internshipDescription } = formContext;
  const { benefits } = internshipDescription;

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;

    formContext.setFormContext({
      ...formContext,
      internshipDescription: {
        ...internshipDescription,
        benefits: value,
      },
    });
  };

  return (
    <InternshipFormItemCard>
      <Col span={24}>
        <Title level={4}>Benefits</Title>
      </Col>
      <Col span={24} className="benefits">
        <Form.Item name="benefits" initialValue={benefits}>
          <TextArea onChange={handleChange} rows={6} placeholder="Description" className="benefits__textArea" />
        </Form.Item>
      </Col>
    </InternshipFormItemCard>
  );
};

export default BenefitsInput;
