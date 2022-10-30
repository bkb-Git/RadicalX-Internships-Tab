import { Col } from "antd";
// import { DownOutlined } from "@ant-design/icons";
import { ReactComponent as ArrowIcon } from "../../assets/arrow-square-down.svg";

import "./Category.scss";

const Category = (props) => {
  const { name, widths } = props;

  return (
    <Col {...widths} className="category">
      {name}
      {name && <ArrowIcon />}
      {/* <Button icon={name && <DownOutlined color="#793EF5" />} type="ghost" size="small" className="category__button" /> */}
    </Col>
  );
};

export default Category;
