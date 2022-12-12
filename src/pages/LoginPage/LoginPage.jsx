import { Col, Row } from "antd";

import UserLoginForm from "./UserLoginForm";

import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <Row justify="center" align="middle" className="loginPage">
      <Col span={12} className="loginPage__image" />
      <Col span={12} className="loginPage__userLogin">
        <UserLoginForm />
      </Col>
    </Row>
  );
};

export default LoginPage;
