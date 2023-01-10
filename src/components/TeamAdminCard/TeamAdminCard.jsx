import { Card, Col, Row, Typography } from "antd";

import { ReactComponent as LinkedInIcon } from "assets/LinkedIn logo.svg";
import { ReactComponent as DefaultProfilePic } from "assets/Rectangle 18895.svg";

import "./TeamAdminCard.scss";

const { Title } = Typography;

const TeamAdminCard = (props) => {
  const { name } = props;
  return (
    <Col span={12}>
      <Card bodyStyle={{ padding: 0 }} hoverable className="teamAdminCard">
        <Row justify="space-between" align="middle">
          <Col span={22}>
            <Row justify="space-between" align="middle">
              <Col span={4}>
                <Row justify="center" align="middle">
                  <DefaultProfilePic />
                </Row>
              </Col>
              <Col span={20}>
                <Title level={5} style={{ marginBottom: 0 }}>
                  {name}
                </Title>
              </Col>
            </Row>
          </Col>
          <Col span={2}>
            <Row justify="center" align="middle">
              <LinkedInIcon />
            </Row>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default TeamAdminCard;
