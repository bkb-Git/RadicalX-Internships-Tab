import { Button, Col, Form, Row, Typography, Input } from "antd";

import { ReactComponent as CloseSvg } from "assets/close.svg";
import { ReactComponent as ProfileSvg } from "assets/profile.svg";
import { ReactComponent as EmailSvg } from "assets/sms.svg";
import { ReactComponent as LinksSvg } from "assets/link.svg";

import UploadProfileImg from "components/UploadProfileImg";

import "./TeamAdminFormModal.scss";

const { Title } = Typography;

const TeamAdminFormModal = (props) => {
  const { handleFinish, handleClose } = props;

  const [form] = Form.useForm();

  const renderAvatar = () => {
    return (
      <Col span={24} style={{ marginBottom: "20px" }}>
        <Row justify="start" align="middle">
          <Col>
            <UploadProfileImg />
          </Col>
        </Row>
      </Col>
    );
  };

  const renderTitle = () => {
    return (
      <Col span={24} style={{ marginBottom: "20px" }}>
        <Row justify="space-between" align="middle" className="teamAdminForm__header">
          <Col span={10}>
            <Title level={4} style={{ marginBottom: 0 }} className="teamAdminForm__header__title">
              Add Team Admin
            </Title>
          </Col>
          <Col>
            <Row justify="center" align="middle" gutter={[12, 0]}>
              <Col>
                <Button htmlType="submit" size="middle" type="primary" className="teamAdminForm__header__saveButton">
                  Save
                </Button>
              </Col>
              <Col onClick={handleClose} className="teamAdminForm__header__closeButton">
                <CloseSvg />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    );
  };

  const renderNameInput = () => {
    return (
      <Col span={24} style={{ marginBottom: "20px" }}>
        <Form.Item name="name" style={{ marginBottom: 0 }}>
          <Input
            prefix={<ProfileSvg width={24} height={24} style={{ marginRight: "1rem" }} />}
            placeholder="Name"
            className="teamAdminForm__input"
          />
        </Form.Item>
      </Col>
    );
  };

  const renderEmailInput = () => {
    return (
      <Col span={24} style={{ marginBottom: "20px" }}>
        <Form.Item name="email" style={{ marginBottom: 0 }}>
          <Input
            prefix={<EmailSvg width={24} height={24} style={{ marginRight: "1rem" }} />}
            placeholder="Email Address"
            className="teamAdminForm__input"
          />
        </Form.Item>
      </Col>
    );
  };

  const renderLink = () => {
    return (
      <Col span={24} style={{ marginBottom: "20px" }}>
        <Form.Item name="linkedIn" style={{ marginBottom: 0 }}>
          <Input
            prefix={<LinksSvg width={24} height={24} style={{ marginRight: "1rem" }} />}
            placeholder="LinkedIn URL (optional)"
            className="teamAdminForm__input"
          />
        </Form.Item>
      </Col>
    );
  };

  return (
    <Row justify="center" align="midle">
      <Form layout="vertical" name="teamAdmin" form={form} onFinish={handleFinish} className="teamAdminForm">
        {renderTitle()}
        {renderAvatar()}
        {renderNameInput()}
        {renderEmailInput()}
        {renderLink()}
      </Form>
    </Row>
  );
};

export default TeamAdminFormModal;
