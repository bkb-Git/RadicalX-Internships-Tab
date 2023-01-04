import { Button, Col, Form, Row, Select, Typography, Input } from "antd";

import { ReactComponent as CloseSvg } from "assets/close.svg";
import { ReactComponent as ArrowDownSvg } from "assets/arrow-down.svg";

import "./TeamRoleFormModal.scss";

const { Title } = Typography;
const { TextArea } = Input;

const ROLE_OPTIONS = [
  {
    value: "iOS Developer",
    label: "iOS Developer",
  },
  {
    value: "Android Developer",
    label: "Android Developer",
  },
  {
    value: "Full Stack Developer",
    label: "Full Stack Developer",
  },
  {
    value: "Back-end Developer",
    label: "Back-end Developer",
  },
  {
    value: "Front-end Developer",
    label: "Front-end Developer",
  },
];

const SKILLS_OPTIONS = [
  {
    value: "Swift",
    label: "Swift",
  },
  {
    value: "iOS",
    label: "iOS",
  },
  {
    value: "Objective-C",
    label: "Objective-C",
  },
  {
    value: "ARM",
    label: "ARM",
  },
];

const LOCATION_OPTIONS = [
  {
    value: "North America",
    label: "North America",
  },
  {
    value: "South America",
    label: "South America",
  },
  {
    value: "Europe",
    label: "Europe",
  },
  {
    value: "Africa",
    label: "Africa",
  },
  {
    value: "Asia",
    label: "Asia",
  },
];

const TeamRoleFormModal = () => {
  const [form] = Form.useForm();

  const handleOnFinish = (values) => {
    console.log(values);
  };

  const renderTitle = () => {
    return (
      <Col span={24} style={{ marginBottom: "20px" }}>
        <Row justify="space-between" align="middle" className="teamRoleForm__header">
          <Col span={10}>
            <Title level={4} style={{ marginBottom: 0 }} className="teamRoleForm__header__title">
              Add Role
            </Title>
          </Col>
          <Col>
            <Row justify="center" align="middle" gutter={[12, 0]}>
              <Col>
                <Button size="middle" type="primary" className="teamRoleForm__header__saveButton">
                  Save
                </Button>
              </Col>
              <Col
                style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                className="teamRoleForm__header__closeButton"
              >
                <CloseSvg />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    );
  };

  const renderRoleSelector = () => {
    return (
      <Col span={24} style={{ marginBottom: "20px" }}>
        <Form.Item name="role" style={{ marginBottom: 0 }}>
          <Select
            placeholder="Select Role"
            className="teamRoleForm__select"
            suffixIcon={<ArrowDownSvg />}
            dropdownStyle={{ borderRadius: "20px", padding: "8px" }}
            options={ROLE_OPTIONS}
          />
        </Form.Item>
      </Col>
    );
  };

  const renderDescription = () => {
    return (
      <Col span={24} style={{ marginBottom: "20px" }}>
        <Form.Item label="Role Description" name="description" style={{ marginBottom: 0 }}>
          <TextArea placeholder="Description..." className="teamRoleForm__description" rows={1} autoSize />
        </Form.Item>
      </Col>
    );
  };

  const renderRequiredSkills = () => {
    return (
      <Col span={24} style={{ marginBottom: "20px" }}>
        <Form.Item label="Required Skills (Select any 3)" name="requiredSkills" style={{ marginBottom: 0 }}>
          <Select
            placeholder="Select Skills"
            className="teamRoleForm__select"
            suffixIcon={<ArrowDownSvg />}
            dropdownStyle={{ borderRadius: "20px", padding: "8px" }}
            options={SKILLS_OPTIONS}
          />
        </Form.Item>
      </Col>
    );
  };

  const renderComplementarySkills = () => {
    return (
      <Col span={24} style={{ marginBottom: "20px" }}>
        <Form.Item label="Complementary Skills (Select any 3)" name="complementarySkills" style={{ marginBottom: 0 }}>
          <Select
            placeholder="Select Skills"
            className="teamRoleForm__select"
            suffixIcon={<ArrowDownSvg />}
            dropdownStyle={{ borderRadius: "20px", padding: "8px" }}
            options={SKILLS_OPTIONS}
          />
        </Form.Item>
      </Col>
    );
  };

  const renderWorkHoursPerWeek = () => {
    return (
      <Col span={24} style={{ marginBottom: "20px" }}>
        <Form.Item label="Minimum Hours Per Week" name="workHours" style={{ marginBottom: 0 }}>
          <Input placeholder="No. of hours" className="teamRoleForm__timeInput" />
        </Form.Item>
      </Col>
    );
  };

  const renderLocationPreferences = () => {
    return (
      <Col span={24} style={{ marginBottom: "20px" }}>
        <Form.Item label="Location Preferences" name="locationPreference" style={{ marginBottom: 0 }}>
          <Select
            placeholder="Select location"
            className="teamRoleForm__select"
            suffixIcon={<ArrowDownSvg />}
            dropdownStyle={{ borderRadius: "20px", padding: "8px" }}
            options={LOCATION_OPTIONS}
          />
        </Form.Item>
      </Col>
    );
  };

  return (
    <Row justify="center" align="midle">
      <Form layout="vertical" name="teamRole" form={form} onFinish={handleOnFinish} className="teamRoleForm">
        {renderTitle()}
        {renderRoleSelector()}
        {renderDescription()}
        {renderRequiredSkills()}
        {renderComplementarySkills()}
        {renderWorkHoursPerWeek()}
        {renderLocationPreferences()}
      </Form>
    </Row>
  );
};

export default TeamRoleFormModal;
