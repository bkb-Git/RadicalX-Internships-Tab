import { Row, Col, Form, Typography, Input } from "antd";

import ApprenticeshipFormItemCard from "components/ApprenticeshipFormItemCard";
import UploadProfileImg from "components/UploadProfileImg";

import { ReactComponent as InfoCircleSvg } from "assets/info-circle.svg";

import "./ApprenticeshipForm.scss";

const { Title } = Typography;

const ApprenticeshipForm = () => {
  const renderTitle = () => {
    return (
      <Form.Item name="title">
        <ApprenticeshipFormItemCard>
          <Row justify="center" align="middle" gutter={[0, 16]}>
            <Col span={24}>
              <Row justify="space-between" align="middle">
                <Title level={5} style={{ marginBottom: 0 }}>
                  Company Logo & Apprenticeship Title
                </Title>
                <InfoCircleSvg />
              </Row>
            </Col>
            <Col span={24}>
              <Row justify="start" align="middle">
                <Col span={2}>
                  <UploadProfileImg />
                </Col>
                <Col span={22}>
                  <Input placeholder="Enter  Apprenticeship Title" className="apprenticeshipForm__title__input" />
                </Col>
              </Row>
            </Col>
          </Row>
        </ApprenticeshipFormItemCard>
      </Form.Item>
    );
  };

  //   const renderCompanyDescription = () => <Form.Item name="company_description" />;
  //   const renderApprenticeshipDescription = () => <Form.Item name="apprenticeship_description" />;
  //   const renderIntroVideo = () => <Form.Item name="intro_video" />;
  //   const renderTeamType = () => <Form.Item name="team_type" />;
  //   const renderTeamRoles = () => <Form.Item name="team_roles" />;
  //   const renderTeamAdmin = () => <Form.Item name="team_admin" />;
  //   const renderTimeline = () => <Form.Item name="timeline" />;

  return (
    <Row justify="center" align="top" style={{ height: "100%" }}>
      <Col span={14}>
        <Form name="newApprenticeship" className="apprenticeshipForm">
          {renderTitle()}
        </Form>
      </Col>
    </Row>
  );
};

export default ApprenticeshipForm;
