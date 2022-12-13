import { Layout } from "antd";
import SideMenu from "layout/MainLayout/SideMenu";
import { Outlet } from "react-router-dom";
import { ReactComponent as RadicalXLogo } from "assets/RadicallX-Black-Logo 1.svg";

import "./MainLayout.scss";
import User from "./User";

const { Sider } = Layout;

const MainLayout = () => {
  return (
    <Layout className="mainLayout">
      <Sider width={230} className="mainLayout__sider">
        <RadicalXLogo />
        <SideMenu />
        <User />
      </Sider>
      <Layout className="mainLayout__content">
        <Outlet />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
