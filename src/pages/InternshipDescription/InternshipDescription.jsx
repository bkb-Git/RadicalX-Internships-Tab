import { useContext } from "react";

import { Col, Row, Space } from "antd";
import { Outlet, useParams } from "react-router-dom";

import AddNewInternshipFormContext from "context/AddNewInternshipFormContext";

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
  const formContext = useContext(AddNewInternshipFormContext);

  return (
    <Row justify="center" align="middle" gutter={[24, 0]} className="internshipDescription">
      <Col span={10} className="internshipDescription__fields">
        <Space size={15} direction="vertical" className="internshipDescription__fields__list">
          {FIELDS.map((field) => {
            const hasValue =
              formContext.internshipDescription[field.id] && formContext.internshipDescription[field.id].length > 0;
            return (
              <InternshipDescriptionField
                data={field}
                key={field.id}
                isActive={fieldId === field.id}
                completed={hasValue}
              />
            );
          })}
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
