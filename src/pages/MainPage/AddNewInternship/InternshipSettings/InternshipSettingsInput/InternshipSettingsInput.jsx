import { useParams } from "react-router-dom";
import BasicSettingsInput from "./BasicSettingsInput";
import HeroImageInput from "./HeroImageInput";
import "./InternshipSettingsInput.scss";

const FIELDS = {
  basicSettings: BasicSettingsInput,
  heroImage: HeroImageInput,
};

const InternshipSettingsInput = () => {
  const { fieldId } = useParams();

  const InternshipGuideFormInput = FIELDS[fieldId];

  return <InternshipGuideFormInput />;
};

export default InternshipSettingsInput;
