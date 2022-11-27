import { Col, Row, Space } from "antd";
import { Outlet, useParams } from "react-router-dom";

import InternshipDescriptionField from "components/InternshipDescriptionField";
import AddField from "./AddField";

import "./InternshipDescription.scss";

const FIELDS = [
  { title: "Category", id: "category" },
  { title: "Description", id: "description" },
  { title: "Location", id: "location" },
  { title: "Benefits", id: "benefits" },
  { title: "Intro Video", id: "intro-video" },
  { title: "Mentor Details", id: "mentor-details" },
  { title: "Recommended Roles", id: "recommended-roles" },
  { title: "Web Links & Resources", id: "links" },
];

const InternshipDescription = () => {
  const { fieldId } = useParams();

  return (
    <Row justify="center" align="middle" gutter={[24, 0]} className="internshipDescription">
      <Col span={10} className="internshipDescription__fields">
        <Space size={15} direction="vertical" className="internshipDescription__fields__list">
          {FIELDS.map((field) => (
            <InternshipDescriptionField data={field} key={field.id} isActive={fieldId === field.id} />
          ))}
          <AddField />
        </Space>
      </Col>
      <Col span={14} className="internshipDescription__form">
        {/* Form Items are rendered here through react-router's outlet feature */}
        <Outlet />
      </Col>
    </Row>
  );
};

export default InternshipDescription;
