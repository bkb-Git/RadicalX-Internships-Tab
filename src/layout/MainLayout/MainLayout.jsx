import { Layout } from "antd";
import "./MainLayout.scss";

const { Sider } = Layout;

const MainLayout = (props) => {
  const { children } = props;

  return (
    <Layout className="mainLayout">
      <Sider width={230} className="mainLayout__sider" />
      <Layout className="mainLayout__content">{children}</Layout>
    </Layout>
  );
};

export default MainLayout;
