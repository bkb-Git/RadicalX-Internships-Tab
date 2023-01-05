// import { useState } from "react";
import { Card, Col, Row, Space, Tag, Typography } from "antd";

import { ReactComponent as CodeSvg } from "assets/code.svg";
import { ReactComponent as EditSvg } from "assets/edit.svg";
import { ReactComponent as CopySvg } from "assets/copy.svg";
import { ReactComponent as DeleteSvg } from "assets/trash.svg";

import "./TeamRoleCard.scss";

const TAGS = ["Agile", "Backlog Prioritization", "Scrum", "Product Analytics", "Team Player"];

const { Paragraph, Title } = Typography;

const TeamRoleCard = (props) => {
  const { data } = props;
  const { role, description } = data;

  const renderTitle = () => {
    return (
      <Col span={24} className="teamRoleCard__header">
        <Row justify="space-between" align="middle" style={{ width: "100%" }}>
          <Col>
            <Space className="teamRoleCard__header__title">
              <CodeSvg />
              <Title level={5} style={{ marginBottom: 0 }}>
                {role}
              </Title>
            </Space>
          </Col>
          <Col>
            <Space className="teamRoleCard__header__actions">
              <EditSvg />
              <CopySvg />
              <DeleteSvg />
            </Space>
          </Col>
        </Row>
      </Col>
    );
  };

  const renderDescription = () => {
    return (
      <Col span={24}>
        <Paragraph>{description}</Paragraph>
      </Col>
    );
  };

  const renderTags = () => {
    return (
      <Col span={24}>
        <Row justify="start" align="middle" gutter={[8, 8]}>
          {TAGS.map((tag) => (
            <Tag key={tag} className="teamRoleCard__tag">
              {tag}
            </Tag>
          ))}
        </Row>
      </Col>
    );
  };

  return (
    <Col span={12}>
      <Card bodyStyle={{ padding: 0 }} className="teamRoleCard">
        <Row justify="center" align="middle" gutter={[0, 20]}>
          {renderTitle()}
          {renderDescription()}
          {renderTags()}
        </Row>
      </Card>
    </Col>
  );
};

export default TeamRoleCard;
