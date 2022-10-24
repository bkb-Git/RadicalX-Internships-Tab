import { Menu } from "antd";
import { ReactComponent as DashboardIcon } from "../../../assets/Dashboard-Icon.svg";
import { ReactComponent as MedalStarIcon } from "../../../assets/Medal-Star.svg";
import { ReactComponent as BookIcon } from "../../../assets/Book.svg";
import { ReactComponent as BriefcaseIcon } from "../../../assets/Briefcase.svg";
import { ReactComponent as SettingsIcon } from "../../../assets/Setting.svg";

import "./SideMenu.scss";

const getItem = (label, key, icon, children) => {
  return {
    key,
    icon,
    children,
    label,
  };
};

const items = [
  getItem("Dashboard", "1", <DashboardIcon />),
  getItem("Apprenterships", "2", <MedalStarIcon />),
  getItem("Internships", "3", <BookIcon />),
  getItem("Jobs", "4", <BriefcaseIcon />),
  getItem("Settings", "5", <SettingsIcon />),
];

const SideMenu = () => {
  return <Menu defaultSelectedKeys={["3"]} mode="inline" items={items} className="sideMenu" />;
};

export default SideMenu;
