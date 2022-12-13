import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { notification } from "antd";
import { updateDoc } from "firebase/firestore";

import { AddNewInternshipFormProvider } from "context/AddNewInternshipFormContext";

import InternshipFormLayout from "layout/InternshipFormLayout";

import "./AddNewInternship.scss";

const ROUTES = {
  0: "description",
  1: "guide",
  2: "survey",
  3: "settings",
};

const AddNewInternship = () => {
  // Component state defined here //

  const [step, setStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Notification API //

  const [api, contextHolder] = notification.useNotification();

  // React-route-dom hooks defined here

  const location = useLocation();
  const navigate = useNavigate();

  // Form finish function defined here //

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

  return (
    <AddNewInternshipFormProvider otherValues={{ step, setStep, handleFormFinish }}>
      <InternshipFormLayout isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} contextHolder={contextHolder} />
    </AddNewInternshipFormProvider>
  );
};

export default AddNewInternship;
