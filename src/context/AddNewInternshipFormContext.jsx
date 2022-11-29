const { createContext } = require("react");

export const defaultValue = {
  internshipDescription: {
    category: [],
    description: "",
    location: "",
    benefits: "",
    "intro-video": "",
    "mentor-details": "",
    "recommended-roles": [],
    links: "",
  },
  internshipGuide: {
    overview: "",
    schedule: "",
    resources: "",
  },
  internshipSettings: {
    basicSettings: "",
    heroImage: "",
  },
  internshipSurvey: {
    survey1: "",
    survey2: "",
  },
  step: 0,
  setStep: () => {},
  setFormContext: () => {},
};

const AddNewInternshipFormContext = createContext(defaultValue);

export default AddNewInternshipFormContext;
