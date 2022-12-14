import { PoweroffOutlined } from "@ant-design/icons";
import { Avatar, Row, Space, Typography, Col, Popover, Button, notification } from "antd";
import { auth } from "firebase";
import { signOut } from "firebase/auth";
import { redirect } from "react-router-dom";

import "./User.scss";

const { Text } = Typography;

const User = () => {
  // Notification API //

  const [api, contextHolder] = notification.useNotification();

  // Handle Sign Out //

  const handleSignOut = (e) => {
    e.preventDefault();

    signOut(auth).then(
      () => redirect("/login"),
      (err) =>
        api.error({
          message: err.message,
          placement: "top",
        })
    );
  };

  const popOverContent = () => {
    return (
      <Row justify="center" align="middle">
        <Col span={24}>
          <Button type="default" icon={<PoweroffOutlined />} style={{ borderRadius: "12px" }} onClick={handleSignOut}>
            Sign Out
          </Button>
        </Col>
      </Row>
    );
  };

  return (
    <Row justify="start" align="middle" className="user">
      <Col span={24}>
        <Space>
          <Popover content={popOverContent()} title="Account" trigger="click">
            <Avatar size={50} style={{ borderRadius: "16px" }} className="user__avatar" />
          </Popover>
          <Text className="user__name">Adam Scott</Text>
        </Space>
      </Col>
      {contextHolder}
    </Row>
  );
};

export default User;
