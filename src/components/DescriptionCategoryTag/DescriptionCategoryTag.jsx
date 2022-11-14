import { Tag } from "antd";

import "./DescriptionCategoryTag.scss";

const DescriptionCategoryTag = (props) => {
  const { tag } = props;
  const { name } = tag;

  return (
    <Tag className="categoryTag" closable>
      {name}
    </Tag>
  );
};

export default DescriptionCategoryTag;
