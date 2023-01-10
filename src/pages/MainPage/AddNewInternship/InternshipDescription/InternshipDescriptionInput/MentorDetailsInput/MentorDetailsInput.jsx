import { useContext } from "react";
import { Col, Form, Input, Row, Typography } from "antd";

import { AddNewInternshipFormContext } from "context/AddNewInternshipFormContext";

import { ReactComponent as ProfileIcon } from "assets/profile.svg";
import { ReactComponent as LinkIcon } from "assets/link.svg";

import { ReactComponent as SmsIcon } from "assets/sms.svg";

import InternshipFormItemCard from "components/InternshipFormItemCard";

import "./MentorDetailsInput.scss";
import UploadProfileImg from "components/UploadProfileImg";

const { Title } = Typography;

const MentorDetailsInput = () => {
  const formContext = useContext(AddNewInternshipFormContext);
  const { internshipDescription } = formContext;
  const { "mentor-details": mentorDetails } = internshipDescription;

  const handleChange = (e) => {
    const {
      target: { id, value },
    } = e;

    formContext.setFormContext({
      ...formContext,
      internshipDescription: {
        ...internshipDescription,
        "mentor-details": {
          ...mentorDetails,
          [id]: value,
        },
      },
    });
  };

  return (
    <InternshipFormItemCard>
      <Col span={24}>
        <Title level={4}>Mentor Details</Title>
      </Col>

      <Col span={24} style={{ marginBottom: "1rem" }}>
        <UploadProfileImg />
      </Col>
      <Col span={24}>
        <Row gutter={[24, 0]} style={{ height: "100%" }}>
          <Col span={12}>
            <Form.Item name="name" initialValue={mentorDetails?.name}>
              <Input
                id="name"
                className="mentorDetails__input"
                placeholder="Name"
                prefix={<ProfileIcon style={{ marginRight: "1rem" }} />}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="email" initialValue={mentorDetails?.email}>
              <Input
                id="email"
                className="mentorDetails__input"
                placeholder="Email address"
                prefix={<SmsIcon style={{ marginRight: "1rem" }} />}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="links" initialValue={mentorDetails?.links}>
              <Input
                id="links"
                className="mentorDetails__input"
                placeholder="LinkedIn URL (optional)"
                prefix={<LinkIcon style={{ marginRight: "1rem" }} />}
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
        </Row>
      </Col>
    </InternshipFormItemCard>
  );
};

export default MentorDetailsInput;
