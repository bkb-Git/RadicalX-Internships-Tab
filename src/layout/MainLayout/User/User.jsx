import { Avatar, Row, Space, Typography } from "antd";

import "./User.scss";

const { Text } = Typography;

const User = () => {
  return (
    <Row justify="start" align="middle" className="user">
      <Space>
        <Avatar size={50} style={{ borderRadius: "16px" }} /> <Text className="user__name">Adam Scott</Text>
      </Space>
    </Row>
  );
};

export default User;
