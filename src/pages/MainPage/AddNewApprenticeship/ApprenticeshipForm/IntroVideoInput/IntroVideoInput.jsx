import { useContext } from "react";
import { Upload, Typography, Row, Tag } from "antd";

import ApprenticeshipFormItemCard from "components/ApprenticeshipFormItemCard";

import { ReactComponent as DocumentUploadIcon } from "assets/document-upload.svg";

import "./IntroVideoInput.scss";
import { AddNewApprenticeshipFormContext } from "context/AddNewApprenticeshipFormContext";

const { Dragger } = Upload;
const { Paragraph } = Typography;

const IntroVideoInput = () => {
  const formContext = useContext(AddNewApprenticeshipFormContext);
  const { setFormContext, loading, intro_video: introductionVideoFileName, ...otherValues } = formContext;

  const handleClose = () => setFormContext({ ...otherValues, intro_video: "" });

  const props = {
    name: "apprenticeship_file",
    multiple: false,
    action: "www.example.com",
    showUploadList: false,
    onChange(info) {
      const { name } = info.file;

      setFormContext({ ...otherValues, intro_video: name });
    },
    onDrop(e) {
      const {
        dataTransfer: { files },
      } = e;

      setFormContext({ ...otherValues, intro_video: files[0].name });
    },
  };

  return (
    <ApprenticeshipFormItemCard
      title="Introduce yourself, your company, and what you're building."
      formName="introVideo"
      className="introVidInput"
    >
      <Dragger className="introVidInput__dragger" {...props}>
        <Paragraph className="introVidInput__dragger__text">
          Drag n drop to upload your video
          <DocumentUploadIcon style={{ marginLeft: "1em" }} />
        </Paragraph>
      </Dragger>
      <Row justify="start" align="middle" style={{ marginTop: "16px" }}>
        {introductionVideoFileName && (
          <Tag
            closable
            onClose={(e) => {
              e.preventDefault();
              handleClose();
            }}
            className="introVidInput__tag"
          >
            {introductionVideoFileName}
          </Tag>
        )}
      </Row>
    </ApprenticeshipFormItemCard>
  );
};

export default IntroVideoInput;
