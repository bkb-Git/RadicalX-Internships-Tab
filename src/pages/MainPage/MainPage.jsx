import { Row } from "antd";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Outlet />
    </Row>
  );
};

export default MainPage;
