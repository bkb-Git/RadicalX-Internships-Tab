import { useState } from "react";
import { Button, Col, Form, Row, Select, Typography, Input, Tag } from "antd";

import { ReactComponent as CloseSvg } from "assets/close.svg";
import { ReactComponent as ArrowDownSvg } from "assets/arrow-down.svg";

import { ReactComponent as ClockSvg } from "assets/clock.svg";

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

const TeamRoleFormModal = (props) => {
  const { handleFinish, handleClose } = props;

  const [skills, setSkills] = useState({ required: null, complemetary: null });

  const [form] = Form.useForm();

  // Handle Selectors for the skills field

  const handleSelectRequiredSkill = (value) => {
    const { required } = skills;

    if (required) return setSkills({ ...skills, required: [...required, value] });
    return setSkills({ ...skills, required: [value] });
  };

  const handleSelectComplementarySkill = (value) => {
    const { complemetary } = skills;

    if (complemetary) return setSkills({ ...skills, complemetary: [...complemetary, value] });
    return setSkills({ ...skills, complemetary: [value] });
  };

  // Render functions for the form views

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
                <Button htmlType="submit" size="middle" type="primary" className="teamRoleForm__header__saveButton">
                  Save
                </Button>
              </Col>
              <Col onClick={handleClose} className="teamRoleForm__header__closeButton">
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
        <Form.Item
          name="role"
          className="teamRoleForm__formItem"
          rules={[
            {
              required: true,
              message: "Please select a role!",
            },
          ]}
        >
          <Select
            placeholder="Select Role"
            className="teamRoleForm__formItem__select teamRoleForm__formItem__select--role"
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
        <Form.Item
          label="Role Description"
          name="description"
          style={{ marginBottom: 0 }}
          rules={[
            {
              required: true,
              message: "Please input a description!",
            },
          ]}
        >
          <TextArea placeholder="Description..." className="teamRoleForm__description" rows={1} autoSize />
        </Form.Item>
      </Col>
    );
  };

  const renderRequiredSkills = () => {
    return (
      <Col span={24} style={{ marginBottom: "20px" }}>
        <Row gutter={[0, 10]}>
          <Col span={24}>
            <Form.Item label="Required Skills (Select any 3)" name="requiredSkills" className="teamRoleForm__formItem">
              <Select
                placeholder="Select Skills"
                className="teamRoleForm__formItem__select teamRoleForm__formItem__select--requiredSkills"
                suffixIcon={<ArrowDownSvg />}
                dropdownStyle={{ borderRadius: "20px", padding: "8px" }}
                onSelect={handleSelectRequiredSkill}
                options={SKILLS_OPTIONS}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            {skills.required &&
              skills.required.map((skill) => (
                <Tag className="teamRoleForm__formItem__tag" closable key={`${skill}-${Math.random(10)}`}>
                  {skill}
                </Tag>
              ))}
          </Col>
        </Row>
      </Col>
    );
  };

  const renderComplementarySkills = () => {
    return (
      <Col span={24} style={{ marginBottom: "20px" }}>
        <Row gutter={[0, 10]}>
          <Col span={24}>
            <Form.Item
              label="Complementary Skills (Select any 3)"
              name="complementarySkills"
              className="teamRoleForm__formItem"
            >
              <Select
                placeholder="Select Skills"
                className="teamRoleForm__formItem__select teamRoleForm__formItem__select--complementarySkills"
                suffixIcon={<ArrowDownSvg />}
                onSelect={handleSelectComplementarySkill}
                dropdownStyle={{ borderRadius: "20px", padding: "8px" }}
                options={SKILLS_OPTIONS}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            {skills.complemetary &&
              skills.complemetary.map((skill) => (
                <Tag className="teamRoleForm__formItem__tag" closable key={`${skill}-${Math.random(10)}`}>
                  {skill}
                </Tag>
              ))}
          </Col>
        </Row>
      </Col>
    );
  };

  const renderWorkHoursPerWeek = () => {
    return (
      <Col span={24} style={{ marginBottom: "20px" }}>
        <Form.Item label="Minimum Hours Per Week" name="workHours" style={{ marginBottom: 0 }}>
          <Input
            prefix={<ClockSvg width={24} height={24} style={{ marginRight: "1rem" }} />}
            placeholder="No. of hours"
            className="teamRoleForm__timeInput"
          />
        </Form.Item>
      </Col>
    );
  };

  const renderLocationPreferences = () => {
    return (
      <Col span={24} style={{ marginBottom: "20px" }}>
        <Form.Item label="Location Preferences" name="locationPreference" className="teamRoleForm__formItem">
          <Select
            placeholder="Select location"
            className="teamRoleForm__formItem__select teamRoleForm__formItem__select--location"
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
      <Form
        layout="vertical"
        name="teamRole"
        form={form}
        onFinish={handleFinish}
        requiredMark={false}
        className="teamRoleForm"
      >
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
