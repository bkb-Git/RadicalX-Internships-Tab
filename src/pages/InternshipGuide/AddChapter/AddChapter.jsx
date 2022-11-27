import { Col, Row } from "antd";

import { ReactComponent as AddItem } from "assets/additem.svg";
import { ReactComponent as Menu } from "../../../assets/menu.svg";

import "./AddChapter.scss";

const AddField = () => {
  return (
    <Row justify="center" align="middle" className="addChapter">
      <Col span={1}>
        <Menu style={{ display: "none" }} />
      </Col>
      <Col span={23} className="addChapter__item">
        <Row justify="center" align="middle" className="addChapter__item__button">
          <AddItem style={{ marginRight: "10px" }} /> Add Chapter
        </Row>
      </Col>
    </Row>
  );
};

export default AddField;
