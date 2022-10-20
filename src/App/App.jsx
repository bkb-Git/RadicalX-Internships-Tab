import { useEffect } from "react";
import { Col, Row, Typography } from "antd";
import getInternships from "api/firebase";

// import logo from "./logo.svg";

const { Title } = Typography;

const App = () => {
  // const [internships, setInternships] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    getInternships()
      .then((docs) => console.log(docs))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Col span={14}>
        <Title> Initialized Firestore </Title>
      </Col>
    </Row>
  );
};

export default App;
