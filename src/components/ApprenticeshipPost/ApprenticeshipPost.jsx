import { Card, Col, notification, Row, Tag, Typography } from "antd";

import { ReactComponent as EditIcon } from "assets/edit.svg";
import { ReactComponent as TrashIcon } from "assets/trash.svg";
import { ReactComponent as CopyIcon } from "assets/copy.svg";

import "./ApprenticeshipPost.scss";
import { deleteDoc } from "firebase/firestore";

const { Title, Paragraph } = Typography;

const ApprenticeshipPost = (props) => {
  const { data, refreshList, setLoading } = props;
  const { title, company_description: companyDescription, teamRoles, id, docRef } = data;

  // Notification API

  const [api, contextHolder] = notification.useNotification();

  // Handle functions defined here

  const handleDelete = async () => {
    setLoading(true);
    deleteDoc(docRef)
      .then(() => refreshList())
      .catch((err) =>
        api.error({
          message: "Could not delete document",
          description: err.message,
          placement: "top",
        })
      );
  };

  // Render functions for views //

  const renderHeader = () => {
    return (
      <Col span={24}>
        <Row justify="space-between">
          <Col span={18}>
            <Title level={4} style={{ marginBottom: "0px" }}>
              {title}
            </Title>
          </Col>
          <Col span={6}>
            <Row justify="end" align="middle" gutter={[8, 0]}>
              <Col className="apprenticeshipPost__card__icon">
                <EditIcon id="edit-icon" />
              </Col>
              <Col className="apprenticeshipPost__card__icon">
                <CopyIcon id="copy-icon" />
              </Col>
              <Col className="apprenticeshipPost__card__icon">
                <TrashIcon onClick={handleDelete} id="delete-icon" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    );
  };

  const renderDescription = () => {
    return (
      <Col span={24}>
        <Paragraph style={{ marginBottom: 0 }}>{companyDescription}</Paragraph>
      </Col>
    );
  };

  const renderTags = () => {
    return (
      <Col span={24}>
        <Row align="middle" justify="start" gutter={[8, 8]}>
          {teamRoles.map((tag) => (
            <Col key={`POST-${id}-${tag.role}`}>
              <Tag className="apprenticeshipPost__card__tag">{tag.role}</Tag>
            </Col>
          ))}
        </Row>
      </Col>
    );
  };

  return (
    <Col className="apprenticeshipPost" span={8} style={{ height: "auto" }}>
      <Card bodyStyle={{ padding: 20, height: "100%" }} className="apprenticeshipPost__card">
        <Row align="middle" style={{ height: "100%" }} gutter={[0, 15]}>
          {renderHeader()}
          {renderDescription()}
          {renderTags()}
          {contextHolder}
        </Row>
      </Card>
    </Col>
  );
};

export default ApprenticeshipPost;
