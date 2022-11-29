import { Card, Row } from "antd";

import "./InternshipFormItemCard.scss";

const InternshipFormItemCard = (props) => {
  const { children, otherStyles, scroll } = props;

  return (
    <Card
      className="formItemCard"
      bodyStyle={{ height: "100%", overflow: "auto" }}
      style={{ ...otherStyles, height: scroll && "100%" }}
    >
      <Row align="middle" gutter={[0, 15]}>
        {children}
      </Row>
    </Card>
  );
};

export default InternshipFormItemCard;
