import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { doc, updateDoc } from "firebase/firestore";
import db from "firebase";

import { Button, Form, Layout, Modal, Result } from "antd";

import {
  AddNewInternshipFormContext,
  AddNewInternshipFormProvider,
  defaultValue,
} from "context/AddNewInternshipFormContext";

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

  // React-router-dom hook functions //

  const navigate = useNavigate();
  const location = useLocation();

  // Handler functions //

  const handleCancel = () => setIsModalOpen(false);

  const handleOk = (ref) => {
    const docRef = doc(db, "internships", ref);

    updateDoc(docRef, defaultValue)
      .then(
        () => {
          navigate("/internships", { replace: true });
          console.log("successfuly reset");
        },
        () => console.log("not successful")
      )
      .then();
  };

  const handleFormFinish = () => setIsModalOpen(!isModalOpen);

  // React life-cycle method that handles current step view //

  useEffect(() => {
    const currentPath = location.pathname;

    if (!currentPath.match(ROUTES[step])) navigate(ROUTES[step]);
  }, [step, location.pathname]);

  // Render functions for views //

  const renderModal = (val) => {
    const { documentRef } = val;
    return (
      <Modal centered open={isModalOpen} footer={null}>
        <Result
          status="success"
          title="Successfully Published Internship!"
          subTitle="Thanks for partnering with us."
          extra={[
            <Button
              type="primary"
              key="goBackHome"
              onClick={() => handleOk(documentRef)}
              style={{ borderRadius: "12px" }}
            >
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
      <AddNewInternshipFormContext.Consumer>{(value) => renderModal(value)}</AddNewInternshipFormContext.Consumer>
    </AddNewInternshipFormProvider>
  );
};

export default InternshipFormLayout;
