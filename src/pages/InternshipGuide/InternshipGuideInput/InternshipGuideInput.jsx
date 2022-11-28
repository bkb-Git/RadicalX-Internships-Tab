import { useParams } from "react-router-dom";
import OverviewInput from "./OverviewInput/OverviewInput";
import ResourcesInput from "./ResourcesInput";
import ScheduleInput from "./ScheduleInput";

import "./InternshipGuideInput.scss";

const InternshipDescriptionInput = () => {
  const { fieldId } = useParams();

  const FIELDS = {
    overview: <OverviewInput />,
    schedule: <ScheduleInput />,
    resources: <ResourcesInput />,
  };

  return FIELDS[fieldId];
};

export default InternshipDescriptionInput;
