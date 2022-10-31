import { Button, Result, Row } from "antd";

const PageNotFound = () => {
  return (
    <Row justify="center" align="middle" style={{ height: "100%" }}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">Back Home</Button>}
      />
    </Row>
  );
};

export default PageNotFound;
