import { Col, Row, Space } from "antd";
import { Outlet, useParams } from "react-router-dom";

import InternshipGuideField from "components/InternshipGuideField";
import AddField from "./AddChapter";

import "./InternshipGuide.scss";

const FIELDS = [
  {
    title: "Overview",
    id: "overview",
    subMenus: [
      { name: "Brief", id: 0 },
      { name: "Requirements", id: 1 },
      { name: "Milestones", id: 2 },
    ],
  },
  {
    title: "Schedule",
    id: "schedule",
    subMenus: [
      { name: "Duration", id: 0 },
      { name: "Timeline", id: 1 },
      { name: "Deliverables", id: 2 },
    ],
  },
  {
    title: "Resources",
    id: "resources",
    subMenus: [
      { name: "Curated Resources", id: 0 },
      { name: "Events", id: 1 },
    ],
  },
];

const InternshipDescription = () => {
  const { fieldId } = useParams();

  return (
    <Row justify="center" align="middle" gutter={[24, 0]} className="internshipGuide">
      <Col span={10} className="internshipGuide__fields">
        <Space size={15} direction="vertical" className="internshipGuide__fields__list">
          {FIELDS.map((field) => (
            <InternshipGuideField data={field} key={field.id} isActive={fieldId === field.id} />
          ))}
          <AddField />
        </Space>
      </Col>
      <Col span={14} className="internshipGuide__form">
        {/* Form Items are rendered here through react-router's outlet feature */}
        <Outlet />
      </Col>
    </Row>
  );
};

export default InternshipDescription;
