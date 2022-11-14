import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import FormHeader from "./FormHeader";

import "./InternshipFormLayout.scss";

const ROUTES = {
  0: "description",
  1: "guide",
  2: "survey",
  3: "settings",
};

const InternshipFormLayout = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;

    if (!currentPath.match(ROUTES[step])) navigate(ROUTES[step]);
  }, [step, location.pathname]);

  return (
    <Layout className="internshipsLayout">
      <FormHeader currentStep={step} changeStep={setStep} />
      <Content className="internshipsLayout__content">
        <Outlet />
      </Content>
    </Layout>
  );
};

export default InternshipFormLayout;
