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

import "./styles/index.scss";

// import getInternships from "api/firebase";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<PageNotFound />} />
          <Route path="internships" element={<Internships />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="internships/add" element={<InternshipFormLayout />}>
          <Route path="description" element={<InternshipDescription />}>
            <Route path=":fieldId" element={<InternshipDescriptionInput />} />
          </Route>
          <Route path="guide" element={<InternshipGuide />}>
            <Route path=":fieldId" element={<InternshipGuideInput />} />
          </Route>
          <Route path="survey" element={<InternshipSurvey />} />
          <Route path="settings" element={<InternshipSettings />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
