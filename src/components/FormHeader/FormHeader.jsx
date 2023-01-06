import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Col, notification, Row, Typography } from "antd";
import { updateDoc } from "firebase/firestore";

import ArrowLeft from "assets/arrow-left";
import ArrowRight from "assets/arrow-right";

import "./FormHeader.scss";

const { Title } = Typography;

const FormHeader = (props) => {
  const { title, context, isFormSubmitted, formIsFilled, finalText, parentRoute, subForms, steps, renderSteps } = props;
  const [submitting, setSubmitting] = useState(false);

  // React-router-dom hook //
  const navigate = useNavigate();

  // Form Context is used here //
  const formContext = useContext(context);
  const { step: currentStep, handleFormFinish, docRef } = formContext;

  useEffect(() => {}, [submitting]);

  // Notification API //

  const [api, contextHolder] = notification.useNotification();

  // Handler functions defined here //

  const handleNext = () => {
    if (formIsFilled) {
      const {
        title: payloadTitle,
        company_description: companyDescription,
        apprenticeship_description: apprenticeshipDescription,
        intro_video: IntroductionVideo,
        teamType,
        teamRoles,
        teamAdmin,
        timeline,
        id,
        formFinished,
      } = formContext;

      const formPayload = {
        title: payloadTitle,
        company_description: companyDescription,
        apprenticeship_description: apprenticeshipDescription,
        intro_video: IntroductionVideo,
        teamType,
        teamRoles,
        teamAdmin,
        timeline,
        id,
        formFinished,
      };

      return updateDoc(docRef, formPayload)
        .then(
          () => {
            handleFormFinish(docRef, setSubmitting);
          },
          () =>
            api.error({
              message: "Failed to Submit Apprenticeship",
              placement: "bottomLeft",
            })
        )
        .catch((err) =>
          api.error({
            message: "Failed to Submit Document",
            description: err.message,
            placement: "bottomLeft",
          })
        );
    }

    const copySteps = Object.keys(steps);
    const lastStep = steps[copySteps[copySteps.length - 1]];

    const isFinalStep = currentStep === lastStep;

    if (isFinalStep) setSubmitting(true);

    return updateDoc(docRef, subForms[currentStep], { ...formContext[subForms[currentStep]] })
      .then(
        () => {
          api.success({
            message: "Document updated successfully",
            placement: "bottomLeft",
          });

          if (isFinalStep) return handleFormFinish(docRef, setSubmitting);
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

    return isFirstStep ? navigate(parentRoute, { replace: true }) : formContext.setStep(currentStep - 1);
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
        {title}
      </Title>
    );
  };

  const renderActionButton = () => {
    const buttonText = () => {
      const copySteps = Object.keys(steps);
      const lastStep = steps[copySteps[copySteps.length - 1]] || title === "Creating Apprenticeships";

      if (currentStep === lastStep) return finalText;
      if (submitting) return "";
      return "Continue to Next Step";
    };

    return (
      <Row justify="end" align="middle">
        <Button
          disabled={formIsFilled ? !formIsFilled : !isFormSubmitted()}
          loading={submitting}
          type="primary"
          size="large"
          className={`formHeader__main__nextButton ${
            (isFormSubmitted() || formIsFilled) && "formHeader__main__nextButton--active"
          }`}
          onClick={handleNext}
        >
          {buttonText()}
          <ArrowRight styles={{ marginLeft: "1rem" }} />
        </Button>
      </Row>
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
