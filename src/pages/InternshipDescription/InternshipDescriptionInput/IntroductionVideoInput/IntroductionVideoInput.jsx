import { useContext } from "react";
import { Col, Form, Row, Tag, Typography, Upload } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import AddNewInternshipFormContext from "context/AddNewInternshipFormContext";
import InternshipFormItemCard from "components/InternshipFormItemCard";

import { ReactComponent as UploadIcon } from "assets/document-upload.svg";

import "./IntroductionVideoInput.scss";

const { Title } = Typography;
const { Dragger } = Upload;

const IntroductionVideoInput = () => {
  const formContext = useContext(AddNewInternshipFormContext);
  const { internshipDescription } = formContext;
  const { "intro-video": introVideo } = internshipDescription;

  const props = {
    name: "file",
    multiple: false,
    action: "",
    onChange(info) {
      const {
        file: { name },
      } = info;

      formContext.setFormContext({
        ...formContext,
        internshipDescription: {
          ...internshipDescription,
          "intro-video": name,
        },
      });
    },
    onDrop(e) {
      const {
        dataTransfer: { files },
      } = e;
      const { name } = files[0];

      formContext.setFormContext({
        ...formContext,
        internshipDescription: {
          ...internshipDescription,
          "intro-video": name,
        },
      });
    },
  };

  return (
    <InternshipFormItemCard>
      <Col span={24}>
        <Title level={4}>Intro Video</Title>
      </Col>
      <Col span={24} className="introVideo">
        <Form.Item name="intro-video" initialValue={introVideo}>
          <Dragger {...props} className="introVideo__dragger">
            <Row gutter={[15, 0]} justify="center" align="middle" style={{ height: "100%" }}>
              <Col style={{ color: "#778188" }}>Drag n drop to upload your video</Col>
              <Col style={{ display: "flex", justifyContent: "center", align: "middle" }}>
                <UploadIcon />
              </Col>
            </Row>
          </Dragger>
        </Form.Item>
      </Col>
      <Col span={24}>
        {introVideo && (
          <Tag
            className="introVideoTag"
            closeIcon={<CloseOutlined size="24px" style={{ marginLeft: "1rem" }} />}
            closable
          >
            {introVideo}
          </Tag>
        )}
      </Col>
    </InternshipFormItemCard>
  );
};

export default IntroductionVideoInput;
