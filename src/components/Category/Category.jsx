import { Col } from "antd";

import SortButton from "./SortButton";

import "./Category.scss";

const Category = (props) => {
  const { name, widths } = props;

  return (
    <Col {...widths} className="category">
      {name}
      {name && <SortButton className="sortIcon" />}
    </Col>
  );
};

export default Category;
