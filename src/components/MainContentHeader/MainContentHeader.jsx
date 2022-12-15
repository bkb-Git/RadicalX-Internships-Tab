import { Button, Row, Typography } from "antd";

import { ReactComponent as PlusIcon } from "assets/add-square.svg";

import "./MainContentHeader.scss";

const { Title } = Typography;

const MainContentHeader = (props) => {
  const { routeHandler: handleRoute, title, buttonTitle, contextHolder } = props;

  return (
    <Row justify="space-between" align="middle" className="mainContentHeader">
      <Title level={3} className="mainContentHeader__title">
        {title}
      </Title>
      <Button
        onClick={handleRoute}
        icon={<PlusIcon style={{ marginRight: "8px" }} />}
        size="large"
        type="primary"
        className="mainContentHeader__button"
      >
        {buttonTitle}
      </Button>
      {contextHolder}
    </Row>
  );
};

export default MainContentHeader;
