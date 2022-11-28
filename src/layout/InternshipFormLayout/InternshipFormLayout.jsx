import { Form, Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import AddNewInternshipFormContext, { defaultValue } from "context/AddNewInternshipFormContext";
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
  const [formContext, setFormContext] = useState(defaultValue);
  const [step, setStep] = useState(2);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;

    if (!currentPath.match(ROUTES[step])) navigate(ROUTES[step]);
  }, [step, location.pathname]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AddNewInternshipFormContext.Provider value={{ ...formContext, setFormContext, step, setStep }}>
      <Layout className="internshipsLayout">
        <FormHeader />
        <Content className="internshipsLayout__content">
          <Form name="newInternship" className="internshipsLayout__content__newInternship">
            <Outlet />
          </Form>
        </Content>
      </Layout>
    </AddNewInternshipFormContext.Provider>
  );
};

export default InternshipFormLayout;
