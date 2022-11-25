import { CheckCircleOutlined, LoadingOutlined } from "@ant-design/icons";

import "./StepsIcon.scss";

const StepsIcon = (props) => {
  const { done } = props;

  return done ? <CheckCircleOutlined /> : <LoadingOutlined spin />;
};

export default StepsIcon;
