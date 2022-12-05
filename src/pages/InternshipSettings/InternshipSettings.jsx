import { Col, Row, Space } from "antd";
import { Outlet, useParams } from "react-router-dom";

import InternshipStandardField from "components/InternshipStandardField";

import "./InternshipSettings.scss";

const FIELDS = [
  {
    title: "Basic Settings",
    id: "basicSettings",
  },
  {
    title: "Hero Image",
    id: "heroImage",
  },
];

const InternshipSettings = () => {
  const { fieldId } = useParams();

  return (
    <Row justify="center" align="middle" gutter={[24, 0]} className="internshipSettings">
      <Col span={10} className="internshipSettings__fields">
        <Space size={15} direction="vertical" className="internshipSettings__fields__list">
          {FIELDS.map((field) => (
            <InternshipStandardField
              form="internshipSettings"
              data={field}
              key={field.id}
              isActive={fieldId === field.id}
            />
          ))}
        </Space>
      </Col>
      <Col span={14} className="internshipSettings__form">
        {/* Form Items are rendered here through react-router's outlet feature */}
        <Outlet />
      </Col>
    </Row>
  );
};

export default InternshipSettings;
