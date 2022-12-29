import { CheckCircleOutlined, Loading3QuartersOutlined } from "@ant-design/icons";

import "./StepsIcon.scss";

const StepsIcon = (props) => {
  const { done } = props;

  return done ? <CheckCircleOutlined /> : <Loading3QuartersOutlined />;
};

export default StepsIcon;
