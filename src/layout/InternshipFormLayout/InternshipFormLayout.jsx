import { Outlet, useNavigate } from "react-router-dom";

import { Button, Form, Layout, Modal, Result } from "antd";

import FormHeader from "./FormHeader";

import "./InternshipFormLayout.scss";

const { Content } = Layout;

const InternshipFormLayout = (props) => {
  const { isModalOpen, setIsModalOpen, contextHolder } = props;

  // Navigate hook defined here //

  const navigate = useNavigate();

  // Handler functions //

  const handleCancel = () => setIsModalOpen(false);

  const handleOk = () => navigate("/internships", { replace: true });

  // Render functions for views //

  const renderModal = () => {
    return (
      <Modal centered open={isModalOpen} footer={null}>
        <Result
          status="success"
          title="Successfully Published Internship!"
          subTitle="Thanks for partnering with us."
          extra={[
            <Button type="primary" key="goBackHome" onClick={handleOk} style={{ borderRadius: "12px" }}>
              Go Back Home
            </Button>,
            <Button key="cancel" onClick={handleCancel} style={{ borderRadius: "12px" }}>
              Cancel
            </Button>,
          ]}
        />
      </Modal>
    );
  };

  return (
    <Layout className="internshipsLayout">
      <FormHeader />
      <Content className="internshipsLayout__content">
        <Form name="newInternship" className="internshipsLayout__content__newInternship">
          <Outlet />
        </Form>
      </Content>
      {renderModal()}
      {contextHolder}
    </Layout>
  );
};

export default InternshipFormLayout;
