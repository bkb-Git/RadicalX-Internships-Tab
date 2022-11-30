import { useContext, useState } from "react";
import { Checkbox, Col, Form, Input, Row, Typography } from "antd";
import InternshipFormItemCard from "components/InternshipFormItemCard";
import AddNewInternshipFormContext from "context/AddNewInternshipFormContext";

import "./BasicSettingsInput.scss";

const { Title } = Typography;

const BasicSettingsInput = () => {
  const formContext = useContext(AddNewInternshipFormContext);
  const { internshipSettings } = formContext;
  const { basicSettings } = internshipSettings;

  const [checked, setChecked] = useState({
    privateInternship__basicSettings: basicSettings.privateInternship__basicSettings
      ? basicSettings.privateInternship__basicSettings
      : false,
    hiddenInternship__basicSettings: basicSettings.hiddenInternship__basicSettings
      ? basicSettings.hiddenInternship__basicSettings
      : false,
    security: basicSettings.security ? basicSettings.security : false,
  });

  const handleChange = (e) => {
    const {
      target: { id, value },
    } = e;

    if (id === "internshipURL") {
      return formContext.setFormContext({
        ...formContext,
        internshipSettings: {
          ...internshipSettings,
          basicSettings: {
            ...basicSettings,
            [id]: value,
          },
        },
      });
    }

    if (id === "privateInternship__basicSettings" || id === "hiddenInternship__basicSettings") {
      return formContext.setFormContext({
        ...formContext,
        internshipSettings: {
          ...internshipSettings,
          basicSettings: {
            ...basicSettings,
            [id]: !checked[id],
          },
        },
      });
    }

    return formContext.setFormContext({
      ...formContext,
      internshipSettings: {
        ...internshipSettings,
        basicSettings: {
          ...basicSettings,
          security: !checked.security,
        },
      },
    });
  };

  const renderInternshipURL = () => {
    return (
      <Col span={24} className="basicSettings__internshipURL">
        <Title level={4}>Internship URL</Title>
        <Form.Item name="internshipURL" initialValue={basicSettings?.internshipURL} style={{ marginBottom: 0 }}>
          <Input placeholder="Add URL" id="internshipURL" onChange={handleChange} />
        </Form.Item>
      </Col>
    );
  };

  const renderAccessSettings = () => {
    return (
      <Col span={24}>
        <Title level={4}>Access</Title>
        <Row>
          <Col span={24}>
            <Form.Item name="privateInternship__basicSettings" style={{ marginBottom: 0 }}>
              <Checkbox
                id="privateInternship__basicSettings"
                onChange={handleChange}
                checked={basicSettings?.privateInternship__basicSettings}
                onClick={() =>
                  setChecked((prevState) => {
                    return {
                      ...prevState,
                      privateInternship__basicSettings: !prevState.privateInternship__basicSettings,
                    };
                  })
                }
              >
                Private Internship
              </Checkbox>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="hiddenInternship__basicSettings" style={{ marginBottom: 0 }}>
              <Checkbox
                id="hiddenInternship__basicSettings"
                onChange={handleChange}
                checked={checked.hiddenInternship__basicSettings}
                onClick={() =>
                  setChecked((prevState) => {
                    return {
                      ...prevState,
                      hiddenInternship__basicSettings: !prevState.hiddenInternship__basicSettings,
                    };
                  })
                }
              >
                Hidden Internship
              </Checkbox>
            </Form.Item>
          </Col>
        </Row>
      </Col>
    );
  };

  const renderSecuritySettings = () => {
    return (
      <Col span={24}>
        <Title level={4}>Access</Title>
        <Form.Item name="security" initialValue={basicSettings?.security} style={{ marginBottom: 0 }}>
          <Checkbox
            id="disableCopying"
            checked={checked.security}
            onClick={() =>
              setChecked((prevState) => {
                return { ...prevState, security: !prevState.security };
              })
            }
            onChange={handleChange}
          >
            Disable Text Copying
          </Checkbox>
        </Form.Item>
      </Col>
    );
  };

  return (
    <InternshipFormItemCard>
      {renderInternshipURL()}
      {renderAccessSettings()}
      {renderSecuritySettings()}
    </InternshipFormItemCard>
  );
};

export default BasicSettingsInput;
