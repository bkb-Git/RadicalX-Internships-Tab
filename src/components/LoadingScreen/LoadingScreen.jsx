import { Row, Spin } from "antd";

const LoadingScreen = () => {
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Spin spinning />
    </Row>
  );
};

export default LoadingScreen;
