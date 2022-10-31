import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "layout/MainLayout";
import Internships from "pages/Internships";
import PageNotFound from "pages/PageNotFound";

import "./styles/index.scss";

// import getInternships from "api/firebase";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="internships" element={<Internships />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  </React.StrictMode>
);
