import AddNewInternship from "pages/MainPage/AddNewInternship";
import InternshipDescription from "pages/MainPage/AddNewInternship/InternshipDescription";
import InternshipDescriptionInput from "pages/MainPage/AddNewInternship/InternshipDescription/InternshipDescriptionInput";
import InternshipGuide from "pages/MainPage/AddNewInternship/InternshipGuide";
import InternshipGuideInput from "pages/MainPage/AddNewInternship/InternshipGuide/InternshipGuideInput";
import InternshipSettings from "pages/MainPage/AddNewInternship/InternshipSettings";
import InternshipSettingsInput from "pages/MainPage/AddNewInternship/InternshipSettings/InternshipSettingsInput";
import InternshipSurvey from "pages/MainPage/AddNewInternship/InternshipSurvey";
import InternshipSurveyInput from "pages/MainPage/AddNewInternship/InternshipSurvey/InternshipSurveyInput";

const addNewInternshipRoute = () => {
  const internshipDescriptionRoute = {
    path: "description",
    element: <InternshipDescription />,
    children: [{ path: ":fieldId", element: <InternshipDescriptionInput /> }],
  };

  const internshipGuideRoute = {
    path: "guide",
    element: <InternshipGuide />,
    children: [{ path: ":fieldId", element: <InternshipGuideInput /> }],
  };

  const internshipSurveyRoute = {
    path: "survey",
    element: <InternshipSurvey />,
    children: [{ path: ":fieldId", element: <InternshipSurveyInput /> }],
  };

  const internshipSettingsRoute = {
    path: "settings",
    element: <InternshipSettings />,
    children: [{ path: ":fieldId", element: <InternshipSettingsInput /> }],
  };

  return {
    path: "internships/add",
    element: <AddNewInternship />,
    children: [internshipDescriptionRoute, internshipGuideRoute, internshipSurveyRoute, internshipSettingsRoute],
  };
};

export default addNewInternshipRoute;
