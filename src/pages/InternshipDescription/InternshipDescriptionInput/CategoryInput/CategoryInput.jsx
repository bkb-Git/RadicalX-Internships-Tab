import { Col, Input, Row, Typography, Form, Space } from "antd";
import DescriptionCategoryTag from "components/DescriptionCategoryTag";
import InternshipFormItemCard from "components/InternshipFormItemCard";
import { AddNewInternshipFormContext } from "context/AddNewInternshipFormContext";
import { useContext } from "react";

import "./CategoryInput.scss";

const { Search } = Input;
const { Title } = Typography;

const CategoryInput = () => {
  const formContext = useContext(AddNewInternshipFormContext);
  const { internshipDescription } = formContext;
  const { category: tagsList } = internshipDescription;

  const handleSearch = (value) => {
    const { category } = internshipDescription;

    if (category.length === 0) {
      formContext.setFormContext({
        ...formContext,
        internshipDescription: { ...internshipDescription, category: [...category, { name: value, id: 0 }] },
      });
    } else {
      const lastCategoryId = category[category.length - 1].id;

      formContext.setFormContext({
        ...formContext,
        internshipDescription: {
          ...internshipDescription,
          category: [...category, { name: value, id: lastCategoryId + 1 }],
        },
      });
    }
  };

  const handleClose = (id) => {
    const { category } = internshipDescription;

    const categoryIndex = category.findIndex((item) => item.id === id);

    category.splice(categoryIndex, 1);

    formContext.setFormContext({
      ...formContext,
      internshipDescription: { ...internshipDescription, category },
    });
  };

  return (
    <InternshipFormItemCard>
      <Col span={24}>
        <Title level={4}>Category</Title>
      </Col>
      <Col span={24} className="categoryInput">
        <Form.Item name="category" initialValue={tagsList[tagsList.length - 1]}>
          <Search placeholder="Search Category" onSearch={handleSearch} />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Row align="middle">
          <Space size="small" wrap>
            {tagsList.map((tag) => (
              <DescriptionCategoryTag tag={tag.name} key={tag.id} handleClose={() => handleClose(tag.id)} />
            ))}
          </Space>
        </Row>
      </Col>
    </InternshipFormItemCard>
  );
};

export default CategoryInput;
