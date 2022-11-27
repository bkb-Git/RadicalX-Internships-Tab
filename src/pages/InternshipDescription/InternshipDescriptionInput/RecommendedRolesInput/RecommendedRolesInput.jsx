import { Col, Form, Input, Row, Space, Typography } from "antd";
import { useContext } from "react";

import InternshipFormItemCard from "components/InternshipFormItemCard";
import AddNewInternshipFormContext from "context/AddNewInternshipFormContext";
import DescriptionCategoryTag from "components/DescriptionCategoryTag";

import "./RecommendedRolesInput.scss";

const { Title } = Typography;
const { Search } = Input;

const RecommendedRolesInput = () => {
  const formContext = useContext(AddNewInternshipFormContext);
  const { internshipDescription } = formContext;
  const { "recommended-roles": recommRoles } = internshipDescription;

  const handleSearch = (value) => {
    const { "recommended-roles": rolesList } = internshipDescription;

    if (rolesList.length === 0) {
      formContext.setFormContext({
        ...formContext,
        internshipDescription: {
          ...internshipDescription,
          "recommended-roles": [...rolesList, { name: value, id: 0 }],
        },
      });
    } else {
      const lastRoleId = rolesList[rolesList.length - 1].id;

      formContext.setFormContext({
        ...formContext,
        internshipDescription: {
          ...internshipDescription,
          "recommended-roles": [...rolesList, { name: value, id: lastRoleId + 1 }],
        },
      });
    }
  };

  const handleClose = (id) => {
    const { "recommended-roles": rolesList } = internshipDescription;

    const categoryIndex = rolesList.findIndex((item) => item.id === id);

    rolesList.splice(categoryIndex, 1);

    formContext.setFormContext({
      ...formContext,
      internshipDescription: { ...internshipDescription, rolesList },
    });
  };

  return (
    <InternshipFormItemCard>
      <Col span={24}>
        <Title level={4}>Recommended Roles</Title>
      </Col>
      <Col span={24} className="recommRolesInput">
        <Form.Item
          name="category"
          initialValue={recommRoles[recommRoles.length - 1]}
          style={{ marginBottom: "0.2rem" }}
        >
          <Search placeholder="Search Roles" onSearch={handleSearch} />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Row align="middle">
          <Space size="small" wrap>
            {recommRoles.map((tag) => (
              <DescriptionCategoryTag tag={tag.name} key={tag.id} handleClose={() => handleClose(tag.id)} />
            ))}
          </Space>
        </Row>
      </Col>
    </InternshipFormItemCard>
  );
};

export default RecommendedRolesInput;
