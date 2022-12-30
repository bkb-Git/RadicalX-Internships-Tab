import { Input } from "antd";
import ApprenticeshipFormItemCard from "components/ApprenticeshipFormItemCard";

import "./ApprenticeshipDescriptionInput.scss";

const { TextArea } = Input;

const ApprenticeshipDescriptionInput = () => {
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
      />
    </ApprenticeshipFormItemCard>
  );
};

export default ApprenticeshipDescriptionInput;
