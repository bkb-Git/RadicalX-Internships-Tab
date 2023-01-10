import { useContext } from "react";
import { Input } from "antd";

import { AddNewApprenticeshipFormContext } from "context/AddNewApprenticeshipFormContext";

import ApprenticeshipFormItemCard from "components/ApprenticeshipFormItemCard";

import "./ApprenticeshipDescriptionInput.scss";

const { TextArea } = Input;

const ApprenticeshipDescriptionInput = () => {
  const formContext = useContext(AddNewApprenticeshipFormContext);
  const { setFormContext, loading, ...otherValues } = formContext;

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;

    setFormContext({ ...otherValues, apprenticeship_description: value });
  };

  return (
    <ApprenticeshipFormItemCard
      title="Apprenticeship Description"
      formName="apprenticeshipDescription"
      className="apprenticeshipDescription"
    >
      <TextArea
        rows={1}
        placeholder="Enter Description"
        className="apprenticeshipDescription__textAreaInput"
        autoSize
        onChange={handleChange}
      />
    </ApprenticeshipFormItemCard>
  );
};

export default ApprenticeshipDescriptionInput;
