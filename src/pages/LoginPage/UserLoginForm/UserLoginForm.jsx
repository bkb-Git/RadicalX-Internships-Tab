/* eslint-disable jsx-a11y/anchor-is-valid */
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Form, Input, Row, Typography } from "antd";

import { ReactComponent as RadicalXLogo } from "assets/RadicallX-Black-Logo 1.svg";
import { Link } from "react-router-dom";

import "./UserLoginForm.scss";

const { Title } = Typography;

const UserLoginForm = () => {
  // Handler Functions //

  const handleFinish = (values) => {
    console.log(values);
  };

  // Render views for form items //

  const renderTitle = () => {
    return (
      <Form.Item className="loginForm__title">
        <Title level={4} style={{ marginBottom: 0 }}>
          Login
        </Title>
      </Form.Item>
    );
  };

  const renderEmail = () => {
    return (
      <Form.Item
        name="email"
        className="loginForm__email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input placeholder="Email" prefix={<MailOutlined style={{ marginRight: "0.5rem" }} />} />
      </Form.Item>
    );
  };

  const renderPassword = () => {
    return (
      <Form.Item
        name="password"
        className="loginForm__password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password placeholder="Password" prefix={<LockOutlined style={{ marginRight: "0.5rem" }} />} />
      </Form.Item>
    );
  };

  const renderRemeberMeAndForgotPassword = () => {
    return (
      <Row justify="space-between" align="middle" className="loginForm__rememberMeAndForgotPass">
        <Col span={12}>
          <Form.Item name="remember" valuePropName="checked" style={{ marginBottom: 0 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Col>
        <Col span={12} style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
          <Link href="#">Forgot Password ?</Link>
        </Col>
      </Row>
    );
  };

  const renderSubmitButton = () => {
    return (
      <Form.Item className="loginForm__submit">
        <Button block type="primary" htmlType="submit" className="loginForm__submit__button">
          Login
        </Button>
      </Form.Item>
    );
  };

  return (
    <Row justify="center" align="middle" className="loginView">
      <Col span={22} className="loginView__logo">
        <RadicalXLogo />
      </Col>
      <Col span={22}>
        <Form name="login" layout="vertical" className="loginForm" onFinish={handleFinish}>
          {renderTitle()}
          {renderEmail()}
          {renderPassword()}
          {renderRemeberMeAndForgotPassword()}
          {renderSubmitButton()}
        </Form>
      </Col>
    </Row>
  );
};

export default UserLoginForm;
