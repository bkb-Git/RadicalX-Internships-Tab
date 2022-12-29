import { Card } from "antd";

import "./ApprenticeshipFormItemCard.scss";

const ApprenticeshipFormItemCard = (props) => {
  const { children } = props;
  return (
    <Card bodyStyle={{ padding: 24, height: "100%" }} hoverable className="apprenticeshipFormItemCard">
      {children}
    </Card>
  );
};

export default ApprenticeshipFormItemCard;
