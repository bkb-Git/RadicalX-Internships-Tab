import { Card, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AddNewInternshipFormContext } from "context/AddNewInternshipFormContext";

import { ReactComponent as Menu } from "assets/menu.svg";
import { ReactComponent as ArrowRight } from "assets/arrow-right-field-icon.svg";
import { ReactComponent as TickCircle } from "assets/tick-circle.svg";

import AddField from "components/AddField";
import SubMenuField from "./SubMenuField";

import "./InternshipGuideField.scss";

const InternshipGuideField = (props) => {
  const { data, isActive } = props;
  const { title, id, subMenus } = data;

  const formContext = useContext(AddNewInternshipFormContext);
  const navigate = useNavigate();

  const completed = Object.values(formContext.internshipGuide[id]).find((value) => value || value.length > 0);

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
          <Row justify="center" align="top" gutter={[0, 24]}>
            <Col span={24}>{renderTitle()}</Col>
            <Row
              gutter={[0, 10]}
              justify="center"
              align="middle"
              className={isActive && "guideFieldCard__subMenus"}
              style={{ width: "100%", display: isActive ? "flex" : "none" }}
            >
              {subMenus.map((menu) => (
                <Col span={24} key={menu.id}>
                  <SubMenuField name={menu.name} id={menu.id} />
                </Col>
              ))}
              <Col span={24}>
                <AddField withMenu={false} />
              </Col>
            </Row>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default InternshipGuideField;
