import { Avatar, Row, Space, Typography, Col } from "antd";

import "./User.scss";

const { Text } = Typography;

const User = () => {
  return (
    <Row justify="start" align="middle" className="user">
      <Col span={24}>
        <Space>
          <Avatar size={50} style={{ borderRadius: "16px" }} className="user__avatar" />{" "}
          <Text className="user__name">Adam Scott</Text>
        </Space>
      </Col>
    </Row>
  );
};

export default User;
