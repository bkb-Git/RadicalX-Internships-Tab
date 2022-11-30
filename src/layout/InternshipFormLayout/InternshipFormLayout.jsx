import { Button, Form, Layout, Modal, Result } from "antd";
import AddNewInternshipFormContext, { defaultValue } from "context/AddNewInternshipFormContext";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
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
  const [formContext, setFormContext] = useState(defaultValue);
  const [step, setStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleCancel = () => setIsModalOpen(false);

  const handleOk = () => navigate("/internships", { replace: true });

  const handleFormFinish = () => setIsModalOpen(!isModalOpen);

  useEffect(() => {
    const currentPath = location.pathname;

    if (!currentPath.match(ROUTES[step])) navigate(ROUTES[step]);
  }, [step, location.pathname]);

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
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AddNewInternshipFormContext.Provider value={{ ...formContext, setFormContext, step, setStep, handleFormFinish }}>
      <Layout className="internshipsLayout">
        <FormHeader />
        <Content className="internshipsLayout__content">
          <Form name="newInternship" className="internshipsLayout__content__newInternship">
            <Outlet />
          </Form>
        </Content>
      </Layout>
      {renderModal()}
    </AddNewInternshipFormContext.Provider>
  );
};

export default InternshipFormLayout;
