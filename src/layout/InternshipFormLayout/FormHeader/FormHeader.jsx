import { Button, Col, Row, Steps, Typography } from "antd";
import ArrowLeft from "assets/arrow-left";
import ArrowRight from "assets/arrow-right";
import AddNewInternshipFormContext from "context/AddNewInternshipFormContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./FormHeader.scss";
import StepsIcon from "./StepsIcon";

const { Title } = Typography;
const { Step } = Steps;

const STEP = {
  DESCRIPTION: 0,
  GUIDE: 1,
  SURVEY: 2,
  SETTINGS: 3,
};

const FormHeader = () => {
  const navigate = useNavigate();
  const formContext = useContext(AddNewInternshipFormContext);
  const {
    step: currentStep,
    internshipDescription,
    internshipGuide,
    internshipSettings,
    internshipSurvey,
  } = formContext;

  console.log(internshipGuide);

  const isFormSubmitted = () => {
    switch (currentStep) {
      case STEP.DESCRIPTION: {
        const emptyInputIndex = Object.values(internshipDescription).findIndex((value) => !value || value.length <= 0);

        return emptyInputIndex < 0;
      }
      case STEP.GUIDE: {
        const emptyInputIndex = Object.values(internshipGuide).findIndex((value) => !value || value.length <= 0);

        return emptyInputIndex < 0;
      }

      case STEP.SURVEY: {
        const emptyInputIndex = Object.values(internshipSurvey).findIndex((value) => !value || value.length <= 0);

        return emptyInputIndex < 0;
      }
      case STEP.SETTINGS: {
        const emptyInputIndex = Object.values(internshipSettings).findIndex((value) => !value || value.length <= 0);

        return emptyInputIndex < 0;
      }

      default:
        return false;
    }
  };

  const handleClick = () => {
    const isFinalStep = currentStep === 3;
    formContext.setStep(isFinalStep ? currentStep : currentStep + 1);
  };

  const renderGoBack = () => {
    return (
      <Row justify="start" align="middle">
        <Col className="formHeader__main__button" onClick={() => navigate("/internships", { replace: true })}>
          <ArrowLeft styles={{ marginRight: "1rem" }} />
        </Col>
        Back
      </Row>
    );
  };

  const renderTitle = () => {
    return (
      <Title level={3} style={{ marginBottom: 0 }}>
        Add New Internship
      </Title>
    );
  };

  const renderActionButton = () => {
    return (
      <Row justify="end" align="middle">
        <Button
          disabled={!isFormSubmitted()}
          type="primary"
          size="large"
          className="formHeader__main__nextButton"
          onClick={handleClick}
        >
          {currentStep === 3 ? "Publish Internship" : "Continue to Next Step"}
          <ArrowRight styles={{ marginLeft: "1rem" }} />
        </Button>
      </Row>
    );
  };

  const renderSteps = () => {
    return (
      <Steps className="formHeader__subMain__steps" current={currentStep}>
        <Step title="Internship Description" icon={<StepsIcon done={currentStep > 0} />} />
        <Step title="Internship Guide" icon={<StepsIcon done={currentStep > 1} />} />
        <Step title="Survey" icon={<StepsIcon done={currentStep > 2} />} />
        <Step title="Settings" icon={<StepsIcon done={currentStep === 3 && !isFormSubmitted()} />} />
      </Steps>
    );
  };

  return (
    <Row gutter={[0, 20]} className="formHeader">
      <Col span={24} className="formHeader__main">
        <Row justify="center" align="middle" style={{ height: "100%" }}>
          <Col span={8}>{renderGoBack()}</Col>
          <Col span={8} style={{ textAlign: "center" }}>
            {renderTitle()}
          </Col>
          <Col span={8}>{renderActionButton()}</Col>
        </Row>
      </Col>
      <Col span={24} className="formHeader__subMain">
        {renderSteps()}
      </Col>
    </Row>
  );
};

export default FormHeader;
