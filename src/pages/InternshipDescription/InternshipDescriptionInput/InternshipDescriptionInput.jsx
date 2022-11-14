import { useParams } from "react-router-dom";
import CategoryInput from "./CategoryInput";

import "./InternshipDescriptionInput.scss";

const InternshipDescriptionInput = () => {
  const { fieldId } = useParams();

  const FIELDS = {
    category: <CategoryInput />,
    // "description": ,
    // "location": ,
    // "benefits": ,
    // "intro-video": ,
    // "mentor-details": ,
    // "recommended-roles": ,
    // "links": ,
  };

  return FIELDS[fieldId];
};

export default InternshipDescriptionInput;
