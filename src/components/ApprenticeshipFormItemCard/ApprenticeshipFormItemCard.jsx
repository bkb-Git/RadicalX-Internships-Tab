import { Button, Card, Col, Form, Modal, Row, Typography } from "antd";

import { ReactComponent as InfoCircleSvg } from "assets/info-circle.svg";
import { ReactComponent as AddCircle } from "assets/add-circle.svg";

import "./ApprenticeshipFormItemCard.scss";

const { Title } = Typography;

const ApprenticeshipFormItemCard = (props) => {
  const { formName, title, className, addButton, modal, children } = props;

  const renderModal = () => {
    const { view: FormComponent, open, setOpen } = modal;
    return (
      <Modal
        footer={null}
        closable={false}
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={800}
        className="apprenticeshipFormItemCard__modalForm"
      >
        <FormComponent />
      </Modal>
    );
  };

  const renderCardTitle = () => {
    return (
      <Col span={24}>
        <Row justify="space-between" align="middle">
          <Col span={20}>
            <Row justify="start" align="middle" gutter={[16, 0]}>
              <Col>
                <Title level={5} style={{ marginBottom: 0 }}>
                  {title}
                </Title>
              </Col>
              {addButton && (
                <Col>
                  <Button
                    onClick={() => addButton()}
                    icon={<AddCircle />}
                    type="ghost"
                    id={title}
                    className="apprenticeshipFormItemCard__button"
                  >
                    Add Team Member
                  </Button>
                </Col>
              )}
            </Row>
          </Col>
          <Col span={4}>
            <Row justify="end" align="middle">
              <InfoCircleSvg />
            </Row>
          </Col>
        </Row>
      </Col>
    );
  };

  return (
    <Card bodyStyle={{ padding: 24, height: "100%" }} hoverable className="apprenticeshipFormItemCard">
      {formName ? (
        <Form.Item name={formName} className={className} style={{ marginBottom: 0 }}>
          <Row justify="center" align="middle" gutter={[0, 16]}>
            {renderCardTitle()}
            <Col span={24}>{children}</Col>
          </Row>
        </Form.Item>
      ) : (
        <Row justify="center" align="middle" gutter={[0, 16]}>
          {renderCardTitle()}
          {children && <Col span={24}>{children}</Col>}
        </Row>
      )}
      {modal && renderModal()}
    </Card>
  );
};

export default ApprenticeshipFormItemCard;
