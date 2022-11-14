import { Card, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Menu } from "../../assets/menu.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrow-right-field-icon.svg";

import "./InternshipDescriptionField.scss";

const InternshipDescriptionField = (props) => {
  const { data, isActive } = props;
  const { title, id } = data;
  const navigate = useNavigate();

  const handleRoute = () => navigate(id);

  return (
    <Row justify="center" align="middle" className="field" id={id}>
      <Col span={1} className="field__menu">
        <Menu />
      </Col>
      <Col span={23} className="field__item">
        <Card
          className={`fieldCard ${isActive && "fieldCard--active"}`}
          bodyStyle={{ padding: 20, width: "100%" }}
          hoverable
          bordered
          onClick={handleRoute}
        >
          <Row justify="space-between" align="middle">
            <Col className="fieldCard__title">{title}</Col>
            <Col className={`fieldCard__icon ${isActive && "fieldCard__icon--active"}`}>
              <ArrowRight />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default InternshipDescriptionField;
