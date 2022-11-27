import { useContext } from "react";
import { Col, Typography, Form, Input } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

import AddNewInternshipFormContext from "context/AddNewInternshipFormContext";
import InternshipFormItemCard from "components/InternshipFormItemCard";

import { ReactComponent as LocationIcon } from "../../../../assets/location.svg";

import "./LocationInput.scss";

const { Title } = Typography;

const LocationInput = () => {
  const formContext = useContext(AddNewInternshipFormContext);
  const { internshipDescription } = formContext;
  const { location } = internshipDescription;

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;

    formContext.setFormContext({
      ...formContext,
      internshipDescription: {
        ...internshipDescription,
        location: value,
      },
    });
  };

  return (
    <InternshipFormItemCard>
      <Col span={24}>
        <Title level={4}>Location</Title>
      </Col>
      <Col span={24} className="location">
        <Form.Item name="location" initialValue={location}>
          <Input
            className="location__input"
            prefix={<LocationIcon />}
            defaultValue={location}
            placeholder="Select Location"
            suffix={<CaretDownOutlined />}
            onChange={handleChange}
          />
        </Form.Item>
      </Col>
    </InternshipFormItemCard>
  );
};

export default LocationInput;
