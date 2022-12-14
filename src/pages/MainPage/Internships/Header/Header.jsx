import { useNavigate } from "react-router-dom";

import { Button, notification, Row, Typography } from "antd";

import { db } from "firebase";
import { addDoc, collection } from "firebase/firestore";

import { defaultValue } from "context/AddNewInternshipFormContext";

import { ReactComponent as PlusIcon } from "assets/add-square.svg";

import "./Header.scss";

const { Title } = Typography;

const Header = () => {
  const navigate = useNavigate();

  // Notification API //

  const [api, contextHolder] = notification.useNotification();

  // In this handle a new document is created and its reference stored in localStorage //

  const handleRoute = () => {
    const internshipCol = collection(db, "internships");
    addDoc(internshipCol, defaultValue)
      .then((value) => {
        localStorage.setItem("docId", value.id);
      })
      .then(() => navigate("add"))
      .catch((err) => api.error({ message: err.message, placement: "bottomLeft" }));
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
      {contextHolder}
    </Row>
  );
};

export default Header;
