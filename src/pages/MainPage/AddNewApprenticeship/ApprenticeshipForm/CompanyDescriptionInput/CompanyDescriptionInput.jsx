import { Input } from "antd";

import ApprenticeshipFormItemCard from "components/ApprenticeshipFormItemCard";

import "./CompanyDescriptionInput.scss";

const { TextArea } = Input;

const CompanyDescriptionInput = () => {
  return (
    <ApprenticeshipFormItemCard
      title="Company Description"
      formName="companyDescription"
      className="companyDescription"
    >
      <TextArea rows={1} placeholder="Enter Description" className="companyDescription__textAreaInput" autoSize />
    </ApprenticeshipFormItemCard>
  );
};

export default CompanyDescriptionInput;
