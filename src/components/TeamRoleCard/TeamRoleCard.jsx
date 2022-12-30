import { Card, Col } from "antd";
import "./TeamRoleCard.scss";

const TeamRoleCard = (props) => {
  const { data } = props;
  const { name } = data;

  console.log(name);

  return (
    <Col span={12}>
      <Card bodyStyle={{ padding: 0 }} className="teamRoleCard">
        {name}
      </Card>
    </Col>
  );
};

export default TeamRoleCard;
