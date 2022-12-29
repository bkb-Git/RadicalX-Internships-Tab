import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { Button, Form, Layout, Modal, Result, Steps } from "antd";

import { AddNewInternshipFormContext } from "context/AddNewInternshipFormContext";

import FormHeader from "components/FormHeader";
import StepsIcon from "components/FormHeader/StepsIcon";

import "./InternshipFormLayout.scss";

const { Content } = Layout;

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

const InternshipFormLayout = (props) => {
  const { isModalOpen, setIsModalOpen, contextHolder } = props;

  // Form Context //

  const formContext = useContext(AddNewInternshipFormContext);

  const {
    step: currentStep,
    internshipDescription,
    internshipGuide,
    internshipSettings,
    internshipSurvey,
  } = formContext;

  // Navigate hook defined here //

  const navigate = useNavigate();

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

  // Steps //

  const steps = () => {
    return (
      <Steps className="formHeader__subMain__steps" current={currentStep}>
        <Step title="Internship Description" icon={<StepsIcon done={currentStep > 0} />} />
        <Step title="Internship Guide" icon={<StepsIcon done={currentStep > 1} />} />
        <Step title="Survey" icon={<StepsIcon done={currentStep > 2} />} />
        <Step title="Settings" icon={<StepsIcon done={currentStep === 3 && isFormSubmitted()} />} />
      </Steps>
    );
  };

  // Handler functions //

  const handleCancel = () => setIsModalOpen(false);

  const handleOk = () => navigate("/internships", { replace: true });

  // Render functions for views //

  const renderModal = () => {
    return (
      <Modal centered open={isModalOpen} footer={null}>
        <Result
          status="success"
          title="Successfully Published Internship!"
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
    <Layout className="internshipsLayout">
      <FormHeader
        title="Add New Internship"
        context={AddNewInternshipFormContext}
        isFormSubmitted={isFormSubmitted}
        finalText="Publish Internship"
        parentRoute="/internships"
        subForms={FORMS}
        steps={STEP}
        renderSteps={steps}
      />
      <Content className="internshipsLayout__content">
        <Form name="newInternship" className="internshipsLayout__content__newInternship">
          <Outlet />
        </Form>
      </Content>
      {renderModal()}
      {contextHolder}
    </Layout>
  );
};

export default InternshipFormLayout;
