import { Button, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { ReactComponent as PlusIcon } from "../../../assets/add-square.svg";

import "./Header.scss";

const { Title } = Typography;

const Header = () => {
  const navigate = useNavigate();

  const handleRoute = () => {
    return navigate("add");
  };

  return (
    <Row justify="space-between" align="middle" className="header">
      <Title level={3} className="header__title">
        Internships
      </Title>
      <Button
        onClick={handleRoute}
        icon={<PlusIcon style={{ marginRight: "8px" }} />}
        size="large"
        type="primary"
        style={{ borderRadius: "12px", display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        Create New Internship
      </Button>
    </Row>
  );
};

export default Header;
