import { useContext } from "react";
import { Button, Col, Form, Input, Typography } from "antd";
import { AddNewInternshipFormContext } from "context/AddNewInternshipFormContext";

import InternshipFormItemCard from "components/InternshipFormItemCard";

import { ReactComponent as LinkIcon } from "assets/link.svg";
import { ReactComponent as AddIcon } from "assets/addIcon.svg";

import "./LinksInput.scss";

const { Title } = Typography;

const RecommendedRolesInput = () => {
  const formContext = useContext(AddNewInternshipFormContext);
  const { internshipDescription } = formContext;
  const { links } = internshipDescription;

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;

    formContext.setFormContext({
      ...formContext,
      internshipDescription: {
        ...internshipDescription,
        links: value,
      },
    });
  };

  return (
    <InternshipFormItemCard>
      <Col span={24}>
        <Title level={4}>Recommended Roles</Title>
      </Col>
      <Col span={24}>
        <Form.Item name="links" initialValue={links} style={{ marginBottom: "0.2rem" }}>
          <Input
            className="linksInput"
            placeholder="Add URL"
            prefix={<LinkIcon style={{ marginRight: "1rem" }} />}
            onChange={handleChange}
          />
        </Form.Item>
      </Col>
      <Col>
        <Button type="default" className="AddLinksButton">
          <AddIcon style={{ marginRight: "0.5rem" }} /> Add URL
        </Button>
      </Col>
    </InternshipFormItemCard>
  );
};

export default RecommendedRolesInput;
