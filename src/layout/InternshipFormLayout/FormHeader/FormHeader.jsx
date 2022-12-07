import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Col, notification, Row, Steps, Typography } from "antd";
import { doc, updateDoc } from "firebase/firestore";

import db from "firebase";

import { AddNewInternshipFormContext } from "context/AddNewInternshipFormContext";

import ArrowLeft from "assets/arrow-left";
import ArrowRight from "assets/arrow-right";
import StepsIcon from "./StepsIcon";

import "./FormHeader.scss";

const { Title } = Typography;
const { Step } = Steps;

const STEP = {
  DESCRIPTION: 0,
  GUIDE: 1,
  SURVEY: 2,
  SETTINGS: 3,
};

const FORMS = {
  0: "internshipDescription",
  1: "internshipGuide",
  2: "internshipSurvey",
  3: "internshipSettings",
};

const FormHeader = () => {
  // React-router-dom hook //
  const navigate = useNavigate();

  // Form Context is used here //
  const formContext = useContext(AddNewInternshipFormContext);
  const {
    step: currentStep,
    internshipDescription,
    internshipGuide,
    internshipSettings,
    internshipSurvey,
    handleFormFinish,
  } = formContext;

  // Notification API //

  const [api, contextHolder] = notification.useNotification();

  // Form values test function defined here //

  const isFormSubmitted = () => {
    switch (currentStep) {
      case STEP.DESCRIPTION: {
        const emptyInputIndex = Object.values(internshipDescription).findIndex((value) => !value || value.length < 0);

        return emptyInputIndex < 0;
      }
      case STEP.GUIDE: {
        // console.log(Object.values(internshipGuide).forEach((value) => console.log(value)));
        const hasAllValues = Object.keys(internshipGuide).every(
          (value) => Object.values(internshipGuide[value]).length > 0
        );

        return hasAllValues;
      }

      case STEP.SURVEY: {
        const emptyInputIndex = Object.values(internshipSurvey).findIndex((value) => !value || value.length < 0);

        return emptyInputIndex < 0;
      }

      case STEP.SETTINGS: {
        const hasAllValues = Object.keys(internshipSettings).every(
          (value) => Object.values(internshipSettings[value]).length > 0
        );

        return hasAllValues;
      }

      default:
        return false;
    }
  };

  // Handler functions defined here //

  const handleNext = () => {
    const isFinalStep = currentStep === STEP.SETTINGS;
    const { documentRef } = formContext;

    const docRef = doc(db, "internships", documentRef);

    updateDoc(docRef, FORMS[currentStep], { ...formContext[FORMS[currentStep]] })
      .then(
        () => {
          api.success({
            message: "Document updated successfully",
            placement: "bottomLeft",
          });

          if (isFinalStep) return handleFormFinish();
          return formContext.setStep(isFinalStep ? currentStep : currentStep + 1);
        },
        () =>
          api.error({
            message: "Failed to Update Document",
            placement: "bottomLeft",
          })
      )
      .catch((err) =>
        api.error({
          message: "Failed to Update Document",
          description: err.message,
          placement: "bottomLeft",
        })
      );
  };

  const handleGoBack = () => {
    const isFirstStep = currentStep === 0;

    if (isFirstStep) return navigate("/internships", { replace: true });
    return formContext.setStep(currentStep - 1);
  };

  // Render functions for views defined here //

  const renderGoBack = () => {
    return (
      <Row justify="start" align="middle">
        <Col className="formHeader__main__button" onClick={handleGoBack}>
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
          className={`formHeader__main__nextButton ${isFormSubmitted() && "formHeader__main__nextButton--active"}`}
          onClick={handleNext}
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
        <Step title="Settings" icon={<StepsIcon done={currentStep === 3 && isFormSubmitted()} />} />
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
      {contextHolder}
    </Row>
  );
};

export default FormHeader;
