import { Tag } from "antd";

import "./DescriptionCategoryTag.scss";

const DescriptionCategoryTag = (props) => {
  const { tag, handleClose } = props;

  return (
    <Tag className="categoryTag" closable onClose={handleClose}>
      {tag}
    </Tag>
  );
};

export default DescriptionCategoryTag;
