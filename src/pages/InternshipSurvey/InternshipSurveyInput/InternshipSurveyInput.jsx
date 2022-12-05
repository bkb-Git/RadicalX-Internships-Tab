import { useParams } from "react-router-dom";
import "./InternshipSurveyInput.scss";
import Survey1 from "./Survey1";
import Survey2 from "./Survey2";

const InternshipSurveyInput = () => {
  const { fieldId } = useParams();

  const FIELDS = {
    survey1: Survey1,
    survey2: Survey2,
  };

  const InternshipGuideFormInput = FIELDS[fieldId];

  return <InternshipGuideFormInput />;
};

export default InternshipSurveyInput;
