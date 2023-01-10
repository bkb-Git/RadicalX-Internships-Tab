import { useState, useEffect } from "react";

import { Col, notification, Row } from "antd";
import { useNavigate } from "react-router-dom";

import ApprenticeshipPost from "components/ApprenticeshipPost";
import MainContentHeader from "components/MainContentHeader";

import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "firebase";

import { defaultValue } from "context/AddNewApprenticeshipFormContext";

import "./Apprenticeships.scss";
import LoadingScreen from "components/LoadingScreen";

const responsiveWidths = { lg: 24, xl: 24, xxl: 24 };

const Apprenticeships = () => {
  const [apprenticeshipsList, setApprenticeshipsList] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Notification API //

  const [api, contextHolder] = notification.useNotification();

  // Async function to get apprenticeships //

  const getApprenticeships = async () => {
    const apprenticeshipsCol = collection(db, "apprenticeships");
    await getDocs(apprenticeshipsCol)
      .then((data) => {
        const currentDoc = data.docs.map((item) => {
          return { data: item.data(), docRef: item.ref };
        });

        setApprenticeshipsList(currentDoc);
        setLoading(false);
      })
      .catch((error) =>
        api.error({
          message: error.message,
          placement: "bottomLeft",
        })
      );
  };

  // useEffect called to retrieve apprenticeship List //

  useEffect(() => {
    getApprenticeships();
  }, []);

  // In this handle a new document is created and its reference stored in localStorage //

  const handleRoute = () => {
    const apprenticeshipCol = collection(db, "apprenticeships");
    addDoc(apprenticeshipCol, defaultValue)
      .then((value) => {
        localStorage.setItem("docId", value.id);
      })
      .then(() => navigate("add"))
      .catch((err) => api.error({ message: err.message, placement: "bottomLeft" }));
  };

  // Render function for the apprenticeship list

  const renderList = () => {
    return (
      <Row gutter={[20, 0]} style={{ height: "100%" }} justify="start" align="top">
        {apprenticeshipsList?.map((post) => {
          const {
            data: { formFinished, ...otherProps },
            docRef,
          } = post;

          return (
            formFinished && (
              <ApprenticeshipPost
                data={{ ...otherProps, docRef }}
                key={post.data.id}
                refreshList={getApprenticeships}
                setLoading={setLoading}
              />
            )
          );
        })}
      </Row>
    );
  };

  return (
    <Row className="apprenticeships">
      <Col {...responsiveWidths} className="apprenticeships__header">
        <MainContentHeader
          title="Apprenticeships"
          buttonTitle="Create New Apprenticeship"
          contextHolder={contextHolder}
          routeHandler={handleRoute}
        />
      </Col>
      <Col {...responsiveWidths} className="apprenticeships__content">
        {loading ? <LoadingScreen /> : renderList()}
      </Col>
    </Row>
  );
};

export default Apprenticeships;
