import { Button, Row, Typography } from "antd";
import { ReactComponent as PlusIcon } from "../../../assets/add-square.svg";

import "./Header.scss";

const { Title } = Typography;

const Header = () => {
  return (
    <Row justify="space-between" align="middle" className="header">
      <Title level={3} className="header__title">
        Internships
      </Title>
      <Button
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
