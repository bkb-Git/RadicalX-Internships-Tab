import { Card, Col, Input, Row, Typography } from "antd";
import DescriptionCategoryTag from "components/DescriptionCategoryTag";
import { useState } from "react";
// import { ReactComponent as SearchIcon } from "../../../../assets/search-normal.svg";

import "./CategoryInput.scss";

const TAGS = [
  {
    name: "Technology",
    id: 0,
  },
  {
    name: "Development",
    id: 1,
  },
];

const { Search } = Input;
const { Title } = Typography;

const CategoryInput = () => {
  const [tagList, setTagList] = useState(TAGS);

  const handleSearch = (value) => {
    const lastTagId = tagList[tagList.length - 1].id;

    setTagList([...tagList, { name: value, id: lastTagId + 1 }]);
  };

  const handleOnClose = (tagId) => {
    const newTags = tagList.filter((tag) => tag.id !== tagId);
    setTagList(newTags);
  };

  return (
    <Card className="categoryInput">
      <Row align="middle" gutter={[0, 15]}>
        <Col span={24}>
          <Title level={4}>Category</Title>
        </Col>
        <Col span={24}>
          <Search className="categoryInput__searchInput" placeholder="Search Category" onSearch={handleSearch} />
        </Col>
        <Col span={24}>
          <Row align="middle">
            {tagList.map((tag) => (
              <DescriptionCategoryTag tag={tag} key={tag.id} onCloseHandler={() => handleOnClose(tag.id)} />
            ))}
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default CategoryInput;
