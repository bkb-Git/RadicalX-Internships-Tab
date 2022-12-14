import { Col, Row, Space } from "antd";
import { Outlet, useParams } from "react-router-dom";

import InternshipStandardField from "components/InternshipStandardField";
import AddChapter from "./AddSurvey";

import "./InternshipSurvey.scss";

const FIELDS = [
  {
    title: "Survey 1",
    id: "survey1",
  },
  {
    title: "Survey 2",
    id: "survey2",
  },
];

const InternshipSurvey = () => {
  const { fieldId } = useParams();

  return (
    <Row justify="center" align="middle" gutter={[24, 0]} className="internshipSurvey">
      <Col span={10} className="internshipSurvey__fields">
        <Space size={15} direction="vertical" className="internshipSurvey__fields__list">
          {FIELDS.map((field) => (
            <InternshipStandardField
              form="internshipSurvey"
              data={field}
              key={field.id}
              isActive={fieldId === field.id}
            />
          ))}
          <AddChapter />
        </Space>
      </Col>
      <Col span={14} className="internshipSurvey__form">
        {/* Form Items are rendered here through react-router's outlet feature */}
        <Outlet />
      </Col>
    </Row>
  );
};

export default InternshipSurvey;
