import { Button, Card, Col, Row, Space, Typography } from "antd";
import { ReactComponent as Calendar } from "../../../assets/calendar-2.svg";
import { ReactComponent as Funnel } from "../../../assets/Funnel.svg";

import "./Insights.scss";

const { Title, Text } = Typography;

const Insights = () => {
  const timeline = () => {
    return (
      <Row justify="space-between" align="middle" style={{ height: "100%" }}>
        <Col>
          <Space>
            <Button style={{ borderRadius: "8px" }} type="primary">
              This Week
            </Button>
            <Button style={{ borderRadius: "8px" }} type="default">
              This Month
            </Button>
          </Space>
        </Col>
        <Col>
          <Button
            icon={<Calendar style={{ marginRight: "8px" }} />}
            style={{ borderRadius: "8px", display: "flex", justifyContent: "center", alignItems: "center" }}
            type="default"
          >
            Select Dates
          </Button>
        </Col>
      </Row>
    );
  };

  const renderSummary = () => {
    return (
      <Col span={6} className="insights__summary">
        <Title level={4} className="insights__summary__title">
          Internships Insights
        </Title>
        <Text className="insights__summary__text">
          In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in which
          knowledge about space can be both a priori and synthetic.
        </Text>
      </Col>
    );
  };

  const renderDetails = () => {
    return (
      <Col span={18} className="insights__details">
        <Row justify="center" style={{ height: "100%" }}>
          <Col span={24} className="insights__details__timeline">
            {timeline()}
          </Col>
          <Col span={24} className="insights__details__graphics">
            <Funnel width={790} height="100%" />
          </Col>
        </Row>
      </Col>
    );
  };

  return (
    <Card className="insights" bodyStyle={{ height: "100%", padding: "16px" }}>
      <Row justify="center" style={{ height: "100%" }}>
        {renderSummary()}
        {renderDetails()}
      </Row>
    </Card>
  );
};

export default Insights;
