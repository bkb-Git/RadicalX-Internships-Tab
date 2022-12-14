import { useParams } from "react-router-dom";

import BenefitsInput from "./BenefitsInput";
import CategoryInput from "./CategoryInput";
import DescriptionInput from "./DescriptionInput";
import IntroductionVideoInput from "./IntroductionVideoInput";
import LinksInput from "./LinksInput";
import LocationInput from "./LocationInput";
import MentorDetailsInput from "./MentorDetailsInput";
import RecommendedRolesInput from "./RecommendedRolesInput";

import "./InternshipDescriptionInput.scss";

const InternshipDescriptionInput = () => {
  const { fieldId } = useParams();

  const FIELDS = {
    category: <CategoryInput />,
    description: <DescriptionInput />,
    location: <LocationInput />,
    benefits: <BenefitsInput />,
    "intro-video": <IntroductionVideoInput />,
    "mentor-details": <MentorDetailsInput />,
    "recommended-roles": <RecommendedRolesInput />,
    links: <LinksInput />,
  };

  return FIELDS[fieldId];
};

export default InternshipDescriptionInput;
