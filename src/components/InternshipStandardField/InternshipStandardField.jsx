import { Card, Col, Row, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AddNewInternshipFormContext } from "context/AddNewInternshipFormContext";

import { ReactComponent as Menu } from "assets/menu.svg";
import { ReactComponent as ArrowRight } from "assets/arrow-right-field-icon.svg";
import { ReactComponent as TickCircle } from "assets/tick-circle.svg";
import { LoadingOutlined } from "@ant-design/icons";

import "./InternshipStandardField.scss";

const InternshipDescriptionField = (props) => {
  const { data, isActive, form, loading } = props;
  const { title, id } = data;

  const formContext = useContext(AddNewInternshipFormContext);
  const navigate = useNavigate();

  let completed;

  if (id === "mentor-details" || id === "basicSettings" || id === "heroImage") {
    completed = Object.values(formContext[form][id]).length > 0;
  } else {
    completed = formContext[form][id]?.length > 0;
  }

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
          onClick={() => navigate(id)}
        >
          <Row justify="space-between" align="middle">
            <Col className="fieldCard__title">
              {title}
              {completed && !loading && <TickCircle />}
            </Col>
            <Col className={`fieldCard__icon ${isActive && "fieldCard__icon--active"}`}>
              {loading ? <Spin indicator={<LoadingOutlined spin />} /> : <ArrowRight />}
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default InternshipDescriptionField;
