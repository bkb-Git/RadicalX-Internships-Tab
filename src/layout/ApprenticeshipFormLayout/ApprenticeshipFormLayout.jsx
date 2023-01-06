import { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Button, Layout, Modal, Result, Steps } from "antd";

import StepsIcon from "components/FormHeader/StepsIcon";

import { AddNewApprenticeshipFormContext } from "context/AddNewApprenticeshipFormContext";
import FormHeader from "components/FormHeader";

import "./ApprenticeshipFormLayout.scss";

const { Content } = Layout;

const STEP = {
  COMPANY_TITLE_AND_DESCRIPTION: 0,
  TEAM_TYPE: 1,
  TEAM_ROLES: 2,
  TEAM_ADMIN: 3,
  TIMELINE: 4,
};

const FORMS = {
  0: "company-title&desc.",
  1: "team-type",
  2: "team-roles",
  3: "team-admin",
  4: "timeline",
};

const { Step } = Steps;

const ApprenticeshipFormLayout = (props) => {
  const { isModalOpen, setIsModalOpen, contextHolder } = props;

  const formContext = useContext(AddNewApprenticeshipFormContext);
  const { step: currentStep, setStep } = formContext;

  const [formIsFilled, setFormIsFilled] = useState(false);

  // function to test form completion //

  const isFormSubmitted = () => {};

  const checkFormState = () => {
    const {
      title,
      company_description: companyDescription,
      apprenticeship_description: apprenticeshipDescription,
      intro_video: introducionVideo,
      teamType,
      teamRoles,
      teamAdmin,
      timeline: { start_date: startDate, end_date: endDate },
    } = formContext;

    const isStepOneDone = title && companyDescription && apprenticeshipDescription && introducionVideo;

    // Validation Checks to move form forward

    if (currentStep === 0 && isStepOneDone) return setStep(currentStep + 1);
    if (currentStep === 1 && teamType) return setStep(currentStep + 1);
    if (currentStep === 2 && teamRoles.length > 0) return setStep(currentStep + 1);
    if (currentStep === 3 && teamAdmin.length > 0) return setStep(currentStep + 1);
    if (currentStep === 4 && startDate && endDate) return setFormIsFilled(true);

    // Validation Checks to move form backwards

    if (!isStepOneDone && currentStep > 0) return setStep(0);
    if (!teamType && currentStep > 1) return setStep(1);
    if (teamRoles.length === 0 && currentStep > 2) return setStep(2);
    if (teamAdmin.length === 0 && currentStep > 3) return setStep(3);
    if ((!startDate || !endDate) && formIsFilled) return setFormIsFilled(false);

    return null;
  };

  useEffect(() => {
    checkFormState();
  }, [formContext]);

  // Navigate hook defined here //

  const navigate = useNavigate();

  // STEPS //

  const steps = () => {
    return (
      <Steps className="formHeader__subMain__steps" current={currentStep}>
        <Step title="Company Title & Desc." icon={<StepsIcon done={currentStep > 0} />} />
        <Step title="Team Type" icon={<StepsIcon done={currentStep > 1} />} />
        <Step title="Team Roles" icon={<StepsIcon done={currentStep > 2} />} />
        <Step title="Team Admin" icon={<StepsIcon done={currentStep > 3} />} />
        <Step title="Timeline" icon={<StepsIcon done={currentStep === 4 && formIsFilled} />} />
      </Steps>
    );
  };

  // Handler functions //

  const handleCancel = () => setIsModalOpen(false);

  const handleOk = () => navigate("/apprenticeships", { replace: true });

  // Render functions for views //

  const renderModal = () => {
    return (
      <Modal centered open={isModalOpen} footer={null}>
        <Result
          status="success"
          title="Successfully Published Apprenticeship!"
          subTitle="Thanks for partnering with us."
          extra={[
            <Button type="primary" key="goBackHome" onClick={handleOk} style={{ borderRadius: "12px" }}>
              Go Back Home
            </Button>,
            <Button key="cancel" onClick={handleCancel} style={{ borderRadius: "12px" }}>
              Cancel
            </Button>,
          ]}
        />
      </Modal>
    );
  };

  return (
    <Layout className="apprenticeshipLayout">
      <FormHeader
        title="Creating Apprenticeships"
        context={AddNewApprenticeshipFormContext}
        isFormSubmitted={isFormSubmitted}
        finalText="Publish Apprenticeship"
        parentRoute="/apprenticeships"
        formIsFilled={formIsFilled}
        subForms={FORMS}
        steps={STEP}
        renderSteps={steps}
      />
      <Content className="apprenticeshipLayout__content">
        <Outlet />
      </Content>
      {renderModal()}
      {contextHolder}
    </Layout>
  );
};

export default ApprenticeshipFormLayout;
