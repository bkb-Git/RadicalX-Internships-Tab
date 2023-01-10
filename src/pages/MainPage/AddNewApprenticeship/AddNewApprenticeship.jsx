import { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

import { notification } from "antd";
import { updateDoc } from "firebase/firestore";

import { AddNewApprenticeshipFormProvider } from "context/AddNewApprenticeshipFormContext";
import ApprenticeshipFormLayout from "layout/ApprenticeshipFormLayout";

import "./AddNewApprenticeship.scss";

const AddNewApprenticeship = () => {
  // Component state defined here //

  const [step, setStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Notification API //

  const [api, contextHolder] = notification.useNotification();

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
  };

  // React life-cycle method that handles current step view //

  return (
    <AddNewApprenticeshipFormProvider otherValues={{ step, setStep, handleFormFinish }}>
      <ApprenticeshipFormLayout
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        contextHolder={contextHolder}
      />
    </AddNewApprenticeshipFormProvider>
  );
};

export default AddNewApprenticeship;
