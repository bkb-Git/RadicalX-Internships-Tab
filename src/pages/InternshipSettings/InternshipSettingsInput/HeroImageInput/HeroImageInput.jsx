import { useContext, useState } from "react";
import { Checkbox, Col, Form, Input, Row, Typography } from "antd";
import InternshipFormItemCard from "components/InternshipFormItemCard";
import AddNewInternshipFormContext from "context/AddNewInternshipFormContext";

import "./HeroImageInput.scss";

const { Title } = Typography;

const HeroImageInput = () => {
  const formContext = useContext(AddNewInternshipFormContext);
  const { internshipSettings } = formContext;
  const { heroImage } = internshipSettings;

  const [checked, setChecked] = useState({
    privateInternship__heroImage: heroImage.privateInternship__heroImage
      ? heroImage.privateInternship__heroImage
      : false,
    hiddenInternship__heroImage: heroImage.hiddenInternship__heroImage ? heroImage.hiddenInternship__heroImage : false,
    security: heroImage.security ? heroImage.security : false,
  });

  const handleChange = (e) => {
    const {
      target: { id, value },
    } = e;

    if (id === "internshipURL__heroImage") {
      return formContext.setFormContext({
        ...formContext,
        internshipSettings: {
          ...internshipSettings,
          heroImage: {
            ...heroImage,
            [id]: value,
          },
        },
      });
    }

    if (id === "privateInternship__heroImage" || id === "hiddenInternship__heroImage") {
      return formContext.setFormContext({
        ...formContext,
        internshipSettings: {
          ...internshipSettings,
          heroImage: {
            ...heroImage,
            [id]: !checked[id],
          },
        },
      });
    }

    return formContext.setFormContext({
      ...formContext,
      internshipSettings: {
        ...internshipSettings,
        heroImage: {
          ...heroImage,
          security: !checked.security,
        },
      },
    });
  };

  const renderInternshipURL = () => {
    return (
      <Col span={24} className="heroImage__internshipURL">
        <Title level={4}>Internship URL</Title>
        <Form.Item
          name="internshipURL__heroImage"
          initialValue={heroImage?.internshipURL__heroImage}
          style={{ marginBottom: 0 }}
        >
          <Input placeholder="Add URL" id="internshipURL__heroImage" onChange={handleChange} />
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
            <Form.Item
              name="privateInternship__heroImage"
              initialValue={heroImage?.privateInternship__heroImage}
              style={{ marginBottom: 0 }}
            >
              <Checkbox
                id="privateInternship__heroImage"
                onChange={handleChange}
                checked={checked.privateInternship__heroImage}
                onClick={() =>
                  setChecked((prevState) => {
                    return { ...prevState, privateInternship__heroImage: !prevState.privateInternship__heroImage };
                  })
                }
              >
                Private Internship
              </Checkbox>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="hiddenInternship__heroImage"
              initialValue={heroImage?.hiddenInternship__heroImage}
              style={{ marginBottom: 0 }}
            >
              <Checkbox
                id="hiddenInternship__heroImage"
                onChange={handleChange}
                checked={checked.hiddenInternship__heroImage}
                onClick={() =>
                  setChecked((prevState) => {
                    return { ...prevState, hiddenInternship__heroImage: !prevState.hiddenInternship__heroImage };
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
        <Form.Item name="security" initialValue={heroImage?.security} style={{ marginBottom: 0 }}>
          <Checkbox
            id="security"
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

export default HeroImageInput;
