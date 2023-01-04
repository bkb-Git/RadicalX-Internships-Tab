import { Card, Checkbox, Col, Row, Typography, Form } from "antd";
import { AddNewApprenticeshipFormContext } from "context/AddNewApprenticeshipFormContext";
import { useContext } from "react";

import "./TeamTypeCard.scss";

const { Title } = Typography;

const TeamTypeCard = (props) => {
  const formContext = useContext(AddNewApprenticeshipFormContext);
  const { setFormContext, loading, ...otherValues } = formContext;

  const { data, setTeamTypeChecked, checked } = props;
  const { type, icon: Icon } = data;

  const handleClick = () => {
    setFormContext({ ...otherValues, teamType: type });
    setTeamTypeChecked(type);
  };

  return (
    <Col span={8} onClick={handleClick}>
      <Card
        hoverable
        bodyStyle={{ padding: 0 }}
        bordered
        loading={loading}
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
