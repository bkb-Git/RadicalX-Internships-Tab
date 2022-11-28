import { useOutletContext, useParams } from "react-router-dom";
import OverviewInput from "./OverviewInput/OverviewInput";
import ResourcesInput from "./ResourcesInput";
import ScheduleInput from "./ScheduleInput";

import "./InternshipGuideInput.scss";

const InternshipGuideInput = () => {
  const { fieldId } = useParams();
  const subMenus = useOutletContext();

  const FIELDS = {
    overview: OverviewInput,
    schedule: ScheduleInput,
    resources: ResourcesInput,
  };

  const InternshipGuideFormInput = FIELDS[fieldId];

  return <InternshipGuideFormInput menus={subMenus} />;
};

export default InternshipGuideInput;
