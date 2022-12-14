import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

import BookIcon from "./MenuIcons/BookIcon";
import BriefcaseIcon from "./MenuIcons/BriefcaseIcon";
import DashboardIcon from "./MenuIcons/DashboardIcon";
import MedalStarIcon from "./MenuIcons/MedalStarIcon";
import SettingsIcon from "./MenuIcons/SettingsIcon";

import "./SideMenu.scss";

const ROUTE_KEY = {
  DASHBOARD: "1",
  APPRENTICESHIPS: "2",
  INTERNSHIPS: "3",
  JOBS: "4",
  SETTINGS: "5",
};

const SideMenu = () => {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const location = useLocation();

  const currentLocation = location.pathname.match(/\w+/)?.[0].toUpperCase();

  const getItem = (label, key, icon, children) => {
    return {
      key,
      icon,
      label,
      children,
    };
  };

  const handleRoute = (e) => {
    switch (e.key) {
      case ROUTE_KEY.DASHBOARD:
        navigate("/");
        break;
      case ROUTE_KEY.INTERNSHIPS:
        navigate("internships");
        break;
      case ROUTE_KEY.APPRENTICESHIPS:
        navigate("apprenticeships");
        break;
      case ROUTE_KEY.JOBS:
        navigate("jobs");
        break;
      case ROUTE_KEY.SETTINGS:
        navigate("settings");
        break;
      default:
    }
  };

  const items = [
    getItem("Dashboard", ROUTE_KEY.DASHBOARD, <DashboardIcon selected={!currentLocation} />),
    getItem(
      "Apprenticeships",
      ROUTE_KEY.APPRENTICESHIPS,
      <MedalStarIcon selected={currentLocation === "APPRENTICESHIPS"} />
    ),
    getItem("Internships", ROUTE_KEY.INTERNSHIPS, <BookIcon selected={currentLocation === "INTERNSHIPS"} />),
    getItem("Jobs", ROUTE_KEY.JOBS, <BriefcaseIcon selected={currentLocation === "JOBS"} />),
    getItem("Settings", ROUTE_KEY.SETTINGS, <SettingsIcon selected={currentLocation === "SETTINGS"} />),
  ];

  return (
    <Menu
      onClick={handleRoute}
      defaultSelectedKeys={["3"]}
      selectedKeys={currentLocation ? [ROUTE_KEY[currentLocation]] : [ROUTE_KEY.DASHBOARD]}
      mode="inline"
      items={items}
      className="sideMenu"
    />
  );
};

export default SideMenu;
