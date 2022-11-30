import { Card, Col, Row } from "antd";

import { ReactComponent as Menu } from "assets/menu.svg";

import "./SubMenuField.scss";

const SubMenuField = (props) => {
  const { name, id } = props;
  return (
    <Card className="subMenuFieldCard" bodyStyle={{ padding: 20, width: "100%" }} hoverable bordered id={id}>
      <Row justify="start" align="middle" gutter={[15, 0]}>
        <Col className="subMenuFieldCard__icon">
          <Menu />
        </Col>
        <Col className="subMenuFieldCard__title">{name}</Col>
      </Row>
    </Card>
  );
};

export default SubMenuField;
