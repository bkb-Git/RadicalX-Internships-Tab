import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// HOC imported here //

import IsUserLoggedIn from "HOC/IsUserLoggedIn";

// Main view components  //

import MainLayout from "layout/MainLayout";
import Internships from "pages/Internships";
import PageNotFound from "pages/PageNotFound";

// Add New Internship components //

import AddNewInternship from "pages/AddNewInternship";

import InternshipDescription from "pages/AddNewInternship/InternshipDescription";
import InternshipGuide from "pages/AddNewInternship/InternshipGuide";
import InternshipSurvey from "pages/AddNewInternship/InternshipSurvey";
import InternshipSettings from "pages/AddNewInternship/InternshipSettings";
import InternshipDescriptionInput from "pages/AddNewInternship/InternshipDescription/InternshipDescriptionInput";
import InternshipGuideInput from "pages/AddNewInternship/InternshipGuide/InternshipGuideInput";
import InternshipSurveyInput from "pages/AddNewInternship/InternshipSurvey/InternshipSurveyInput";
import InternshipSettingsInput from "pages/AddNewInternship/InternshipSettings/InternshipSettingsInput";

import "./styles/index.scss";

// import getInternships from "api/firebase";

const container = document.getElementById("root");
const root = createRoot(container);

const App = () => {
  return (
    <Routes>
      {/* Main View is routed here */}

      <Route path="/" element={<MainLayout />}>
        <Route index element={<PageNotFound />} />
        <Route path="internships" element={<Internships />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>

      {/* Add New Internship view routed here */}

      <Route path="internships/add" element={<AddNewInternship />}>
        <Route path="description" element={<InternshipDescription />}>
          <Route path=":fieldId" element={<InternshipDescriptionInput />} />
        </Route>
        <Route path="guide" element={<InternshipGuide />}>
          <Route path=":fieldId" element={<InternshipGuideInput />} />
        </Route>
        <Route path="survey" element={<InternshipSurvey />}>
          <Route path=":fieldId" element={<InternshipSurveyInput />} />
        </Route>
        <Route path="settings" element={<InternshipSettings />}>
          <Route path=":fieldId" element={<InternshipSettingsInput />} />
        </Route>
      </Route>

      {/* Page 404 route define here */}

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <IsUserLoggedIn component={App} />
    </BrowserRouter>
  </React.StrictMode>
);
