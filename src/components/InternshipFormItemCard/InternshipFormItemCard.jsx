import { Card, Row } from "antd";
import { AddNewInternshipFormContext } from "context/AddNewInternshipFormContext";
import { useContext } from "react";

import "./InternshipFormItemCard.scss";

const InternshipFormItemCard = (props) => {
  const { children, otherStyles, scroll } = props;
  const { loading } = useContext(AddNewInternshipFormContext);

  return (
    <Card
      className="formItemCard"
      bodyStyle={{ height: "100%", overflow: "auto" }}
      loading={loading}
      style={{ ...otherStyles, height: scroll && "100%" }}
    >
      <Row align="middle" gutter={[0, 15]}>
        {children}
      </Row>
    </Card>
  );
};

export default InternshipFormItemCard;
