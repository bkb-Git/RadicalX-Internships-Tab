import { Row, Col, Form } from "antd";

import ApprenticeshipDescriptionInput from "./ApprenticeshipDescriptionInput";
import ApprenticeshipTitleInput from "./ApprenticeshipTitleInput";
import CompanyDescriptionInput from "./CompanyDescriptionInput";
import IntroVideoInput from "./IntroVideoInput";
import ApprenticeshipTeamType from "./ApprenticeshipTeamType";
import ApprenticeshipTeamRoles from "./ApprenticeshipTeamRoles";
import ApprenticeshipTeamAdmin from "./ApprenticeshipTeamAdmin";
import ApprenticeshipTimeline from "./ApprenticeshipTimeline";

import "./ApprenticeshipForm.scss";

const ApprenticeshipForm = () => {
  return (
    <Row justify="center" align="top" style={{ height: "100%" }}>
      <Col span={14}>
        <Form name="newApprenticeship" className="apprenticeshipForm">
          <ApprenticeshipTitleInput />
          <CompanyDescriptionInput />
          <ApprenticeshipDescriptionInput />
          <IntroVideoInput />
          <ApprenticeshipTeamType />
          <ApprenticeshipTeamRoles />
          <ApprenticeshipTeamAdmin />
          <ApprenticeshipTimeline />
        </Form>
      </Col>
    </Row>
  );
};

export default ApprenticeshipForm;
