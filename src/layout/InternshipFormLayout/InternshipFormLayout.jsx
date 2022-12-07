import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { updateDoc } from "firebase/firestore";

import { Button, Form, Layout, Modal, notification, Result } from "antd";

import { AddNewInternshipFormProvider } from "context/AddNewInternshipFormContext";

import FormHeader from "./FormHeader";

import "./InternshipFormLayout.scss";

const ROUTES = {
  0: "description",
  1: "guide",
  2: "survey",
  3: "settings",
};

const { Content } = Layout;

const InternshipFormLayout = () => {
  // Form state defined here

  const [step, setStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Notification API //

  const [api, contextHolder] = notification.useNotification();

  // React-router-dom hook functions //

  const navigate = useNavigate();
  const location = useLocation();

  // Handler functions //

  const handleCancel = () => setIsModalOpen(false);

  const handleOk = () => navigate("/internships", { replace: true });

  const handleFormFinish = (docRef, setSubmitting) => {
    updateDoc(docRef, "formFinished", true)
      .then(
        () => {
          setSubmitting(false);
          setIsModalOpen(true);
        },
        () =>
          api.error({
            message: "Failed to Submit Internship",
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
  };

  // React life-cycle method that handles current step view //

  useEffect(() => {
    const currentPath = location.pathname;

    if (!currentPath.match(ROUTES[step])) navigate(ROUTES[step]);
  }, [step, location.pathname]);

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
    <AddNewInternshipFormProvider otherValues={{ step, setStep, handleFormFinish }}>
      <Layout className="internshipsLayout">
        <FormHeader />
        <Content className="internshipsLayout__content">
          <Form name="newInternship" className="internshipsLayout__content__newInternship">
            <Outlet />
          </Form>
        </Content>
      </Layout>
      {renderModal()}
      {contextHolder}
    </AddNewInternshipFormProvider>
  );
};

export default InternshipFormLayout;
