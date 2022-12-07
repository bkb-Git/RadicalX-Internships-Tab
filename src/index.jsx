import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "layout/MainLayout";
import Internships from "pages/Internships";
import PageNotFound from "pages/PageNotFound";
import InternshipFormLayout from "layout/InternshipFormLayout";
import InternshipDescription from "pages/InternshipDescription";
import InternshipGuide from "pages/InternshipGuide";
import InternshipSurvey from "pages/InternshipSurvey";
import InternshipSettings from "pages/InternshipSettings";
import InternshipDescriptionInput from "pages/InternshipDescription/InternshipDescriptionInput";
import InternshipGuideInput from "pages/InternshipGuide/InternshipGuideInput";
import InternshipSurveyInput from "pages/InternshipSurvey/InternshipSurveyInput";
import InternshipSettingsInput from "pages/InternshipSettings/InternshipSettingsInput";

import "./styles/index.scss";

// import getInternships from "api/firebase";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Main View is routed here */}

        <Route path="/" element={<MainLayout />}>
          <Route index element={<PageNotFound />} />
          <Route path="internships" element={<Internships />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>

        {/* Add New Internship view routed here */}

        <Route path="internships/add" element={<InternshipFormLayout />}>
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
    </BrowserRouter>
  </React.StrictMode>
);
