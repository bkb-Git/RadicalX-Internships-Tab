import { Card, Row } from "antd";
import "./InternshipFormItemCard.scss";

const InternshipFormItemCard = (props) => {
  const { children } = props;
  return (
    <Card className="formItemCard">
      <Row align="middle" gutter={[0, 15]}>
        {children}
      </Row>
    </Card>
  );
};

export default InternshipFormItemCard;
