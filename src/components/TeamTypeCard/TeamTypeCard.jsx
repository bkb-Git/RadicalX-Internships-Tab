import { Card, Checkbox, Col, Row, Typography, Form } from "antd";

import "./TeamTypeCard.scss";

const { Title } = Typography;

const TeamTypeCard = (props) => {
  const { data, setTeamTypeChecked, checked } = props;
  const { type, icon: Icon } = data;

  const handleClick = () => {
    setTeamTypeChecked(type);
  };

  return (
    <Col span={8} onClick={handleClick}>
      <Card
        hoverable
        bodyStyle={{ padding: 0 }}
        bordered
        className={`teamTypeCard ${checked && "teamTypeCard--checked"} `}
      >
        <Row justify="center" align="middle" gutter={[0, 10]}>
          <Col span={24}>
            <Row justify="space-between" align="middle">
              <Col span={12} className="teamTypeCard__icon">
                <Icon />
              </Col>
              <Col span={12} className="teamTypeCard__checkbox">
                <Form.Item name={type} style={{ marginBottom: 0 }}>
                  <Checkbox checked={checked} className="teamTypeCard__checkbox__input" />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Title level={5} style={{ marginBottom: 0 }}>
              {type}
            </Title>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default TeamTypeCard;
