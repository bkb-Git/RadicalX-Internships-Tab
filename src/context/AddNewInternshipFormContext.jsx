const { createContext } = require("react");

export const defaultValue = {
  internshipDescription: {
    category: [],
    description: "",
    location: "",
    benefits: "",
    "intro-video": "",
    "mentor-details": "",
    "recommended-roles": "",
    links: "",
  },
  internshipGuide: {},
  internshipSettings: {},
  internshipSurvey: {},
  step: 0,
  setFormContext: () => {},
};

const AddNewInternshipFormContext = createContext(defaultValue);

export default AddNewInternshipFormContext;
