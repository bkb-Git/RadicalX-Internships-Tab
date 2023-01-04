import { useContext } from "react";
import { Input } from "antd";

import { AddNewApprenticeshipFormContext } from "context/AddNewApprenticeshipFormContext";

import ApprenticeshipFormItemCard from "components/ApprenticeshipFormItemCard";

import "./CompanyDescriptionInput.scss";

const { TextArea } = Input;

const CompanyDescriptionInput = () => {
  const formContext = useContext(AddNewApprenticeshipFormContext);
  const { setFormContext, loading, ...otherValues } = formContext;

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    setFormContext({ company_description: value, ...otherValues });
  };

  return (
    <ApprenticeshipFormItemCard
      title="Company Description"
      formName="companyDescription"
      className="companyDescription"
    >
      <TextArea
        rows={1}
        placeholder="Enter Description"
        className="companyDescription__textAreaInput"
        autoSize
        onChange={handleChange}
      />
    </ApprenticeshipFormItemCard>
  );
};

export default CompanyDescriptionInput;
