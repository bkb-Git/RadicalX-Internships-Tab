import { useContext } from "react";
import { useParams } from "react-router-dom";

import { Col, Input, Row, Tag, Typography, Upload, Form } from "antd";

import { ReactComponent as UploadIcon } from "assets/document-upload.svg";
import { AddNewInternshipFormContext } from "context/AddNewInternshipFormContext";

import "./InternshipGuideFormItem.scss";

const { Title } = Typography;
const { Dragger } = Upload;

const InternshipGuideFormItem = (props) => {
  const { name, formItemName } = props;
  const { fieldId } = useParams();

  const formContext = useContext(AddNewInternshipFormContext);
  const { internshipGuide } = formContext;
  const {
    [fieldId]: { [formItemName]: data },
  } = internshipGuide;

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;

    formContext.setFormContext({
      ...formContext,
      internshipGuide: {
        ...internshipGuide,
        [fieldId]: { ...internshipGuide[fieldId], [formItemName]: value },
      },
    });
  };

  const renderTitle = () => {
    return (
      <Title level={4} style={{ marginBottom: 0 }}>
        {name}
      </Title>
    );
  };

  const renderInput = () => (
    <Form.Item style={{ marginBottom: 0 }} name={formItemName} initialValue={data}>
      <Input placeholder="Description" onChange={handleChange} />
    </Form.Item>
  );

  const renderDragger = () => {
    return (
      <Dragger className="guideFormItem__dragNdrop__dragger">
        <Row gutter={[15, 0]} justify="center" align="middle" style={{ height: "100%" }}>
          <Col style={{ color: "#778188" }}>Drag n drop to upload your video</Col>
          <Col style={{ display: "flex", justifyContent: "center", align: "middle" }}>
            <UploadIcon />
          </Col>
        </Row>
      </Dragger>
    );
  };

  const renderTags = () => {
    return (
      <Tag className="guideFormItem__fileNameList__tag" closable>
        Filename.pptx
      </Tag>
    );
  };

  return (
    <Col span={24} className="guideFormItem">
      <Row justify="center" align="midle" gutter={[0, 16]}>
        <Col span={24} className="guideFormItem__title">
          {renderTitle()}
        </Col>
        <Col span={24} className="guideFormItem__input">
          {renderInput()}
        </Col>
        <Col span={24} className="guideFormItem__dragNdrop">
          {renderDragger()}
        </Col>
        <Col span={24} className="guideFormItem__fileNameList">
          {renderTags()}
        </Col>
      </Row>
    </Col>
  );
};

export default InternshipGuideFormItem;
