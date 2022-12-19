import { useNavigate } from "react-router-dom";

import { notification } from "antd";

import { db } from "firebase";
import { addDoc, collection } from "firebase/firestore";

import { defaultValue } from "context/AddNewInternshipFormContext";

import MainContentHeader from "components/MainContentHeader";

import "./Header.scss";

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
    <MainContentHeader
      title="Internships"
      buttonTitle="Create New Internships"
      contextHolder={contextHolder}
      routeHandler={handleRoute}
    />
  );
};

export default Header;
