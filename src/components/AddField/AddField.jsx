import { Col, Row } from "antd";
import { ReactComponent as AddIcon } from "assets/addIcon.svg";
import { ReactComponent as Menu } from "assets/menu.svg";

import "./AddField.scss";

const AddField = (props) => {
  const { withMenu } = props;

  return (
    <Row justify="center" align="middle" className={withMenu ? "addWithMenu" : "add"}>
      {withMenu && (
        <Col span={1}>
          <Menu style={{ display: "none" }} />
        </Col>
      )}
      <Col span={withMenu ? 23 : 24} className={withMenu ? "addWithMenu__item" : "add__item"}>
        <Row justify="center" align="middle" className={withMenu ? "addWithMenu__item__button" : "add__item__button"}>
          <AddIcon style={{ marginRight: "10px" }} /> Add Field
        </Row>
      </Col>
    </Row>
  );
};

export default AddField;
