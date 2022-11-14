import { Col, Row } from "antd";
import { ReactComponent as AddIcon } from "../../../assets/addIcon.svg";
import { ReactComponent as Menu } from "../../../assets/menu.svg";

import "./AddField.scss";

const AddField = () => {
  return (
    <Row justify="center" align="middle" className="add">
      <Col span={1}>
        <Menu style={{ display: "none" }} />
      </Col>
      <Col span={23} className="add__item">
        <Row justify="center" align="middle" className="add__item__button">
          <AddIcon style={{ marginRight: "10px" }} /> Add Field
        </Row>
      </Col>
    </Row>
  );
};

export default AddField;
