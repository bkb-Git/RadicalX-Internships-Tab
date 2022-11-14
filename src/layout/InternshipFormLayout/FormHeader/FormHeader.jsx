import { LoadingOutlined } from "@ant-design/icons";
import { Button, Col, Row, Steps, Typography } from "antd";
import ArrowLeft from "assets/arrow-left";
import ArrowRight from "assets/arrow-right";

import "./FormHeader.scss";

const { Title } = Typography;
const { Step } = Steps;

const FormHeader = (props) => {
  const { currentStep } = props;

  const renderGoBack = () => {
    return (
      <Row justify="start" align="middle" className="formHeader__main__back">
        <ArrowLeft styles={{ marginRight: "1rem" }} /> Back
      </Row>
    );
  };

  const renderTitle = () => {
    return (
      <Title level={3} style={{ marginBottom: 0 }}>
        Add New Internship
      </Title>
    );
  };

  const renderActionButton = () => {
    return (
      <Row justify="end" align="middle">
        <Button
          disabled
          type="primary"
          size="large"
          className="formHeader__main__nextButton"
          style={{ borderRadius: "12px" }}
        >
          Continue to Next Step
          <ArrowRight styles={{ marginLeft: "1rem" }} />
        </Button>
      </Row>
    );
  };

  const renderSteps = () => {
    return (
      <Steps className="formHeader__subMain__steps" current={currentStep}>
        <Step title="Internship Description" icon={<LoadingOutlined style={{ marginRight: "0.5rem" }} />} />
        <Step title="Internship Guide" icon={<LoadingOutlined style={{ marginRight: "0.5rem" }} />} />
        <Step title="Survey" icon={<LoadingOutlined style={{ marginRight: "0.5rem" }} />} />
        <Step title="Settings" icon={<LoadingOutlined style={{ marginRight: "0.5rem" }} />} />
      </Steps>
    );
  };

  return (
    <Row gutter={[0, 20]} className="formHeader">
      <Col span={24} className="formHeader__main">
        <Row justify="center" align="middle" style={{ height: "100%" }}>
          <Col span={8}>{renderGoBack()}</Col>
          <Col span={8} style={{ textAlign: "center" }}>
            {renderTitle()}
          </Col>
          <Col span={8}>{renderActionButton()}</Col>
        </Row>
      </Col>
      <Col span={24} className="formHeader__subMain">
        {renderSteps()}
      </Col>
    </Row>
  );
};

export default FormHeader;
