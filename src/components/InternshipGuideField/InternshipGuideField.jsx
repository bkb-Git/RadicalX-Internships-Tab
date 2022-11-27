import { Card, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import AddNewInternshipFormContext from "context/AddNewInternshipFormContext";

import { ReactComponent as Menu } from "../../assets/menu.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrow-right-field-icon.svg";
import { ReactComponent as TickCircle } from "../../assets/tick-circle.svg";

import "./InternshipGuideField.scss";

const InternshipGuideField = (props) => {
  const { data, isActive } = props;
  const { title, id } = data;

  const formContext = useContext(AddNewInternshipFormContext);
  const navigate = useNavigate();

  const completed = Object.values(formContext.internshipGuide[id]).length > 0;

  //   if (id === "mentor-details") {
  //     completed =;
  //   } else {
  //     completed = formContext.internshipDescription[id].length > 0;
  //   }

  const renderTitle = () => {
    return (
      <Row justify="space-between" align="middle">
        <Col className="guideFieldCard__title">
          {title}
          {completed && <TickCircle />}
        </Col>
        <Col className={`guideFieldCard__icon ${isActive && "guideFieldCard__icon--active"}`}>
          <ArrowRight />
        </Col>
      </Row>
    );
  };

  return (
    <Row justify="center" align={isActive ? "top" : "middle"} className="guideField" id={id}>
      <Col span={1} className={`guideField__menu ${isActive && "guideField__menu--active"}`}>
        <Menu />
      </Col>
      <Col span={23} className="guideField__item">
        <Card
          className={`guideFieldCard ${isActive && "guideFieldCard--active"}`}
          bodyStyle={{ padding: 20, width: "100%", height: "100%" }}
          hoverable
          bordered
          onClick={() => navigate(id)}
        >
          <Row justify="center" align="top">
            <Col span={24}>{renderTitle()}</Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default InternshipGuideField;
