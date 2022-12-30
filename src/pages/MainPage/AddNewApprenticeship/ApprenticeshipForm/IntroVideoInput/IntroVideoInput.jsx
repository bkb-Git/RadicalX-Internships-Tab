import { Upload, Typography } from "antd";

import ApprenticeshipFormItemCard from "components/ApprenticeshipFormItemCard";

import { ReactComponent as DocumentUploadIcon } from "assets/document-upload.svg";

import "./IntroVideoInput.scss";

const { Dragger } = Upload;
const { Paragraph } = Typography;

const IntroVideoInput = () => {
  return (
    <ApprenticeshipFormItemCard
      title="Introduce yourself, your company, and what you're building."
      formName="introVideo"
      className="introVidInput"
    >
      <Dragger className="introVidInput__dragger">
        <Paragraph
          style={{ marginBottom: 0, display: "flex", justifyContent: "center", alignItems: "center", color: "#778188" }}
        >
          Drag n drop to upload your video
          <DocumentUploadIcon style={{ marginLeft: "1em" }} />
        </Paragraph>
      </Dragger>
    </ApprenticeshipFormItemCard>
  );
};

export default IntroVideoInput;
