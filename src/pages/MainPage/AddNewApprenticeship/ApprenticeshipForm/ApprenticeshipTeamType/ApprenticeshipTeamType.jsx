import { useState } from "react";
import { Row } from "antd";

import ApprenticeshipFormItemCard from "components/ApprenticeshipFormItemCard";
import TeamTypeCard from "components/TeamTypeCard";

import { ReactComponent as Box2 } from "assets/box-2.svg";
import { ReactComponent as Mobile } from "assets/mobile.svg";
import { ReactComponent as Monitor } from "assets/monitor.svg";
import { ReactComponent as Diagram } from "assets/diagram.svg";
import { ReactComponent as KeyboardOpen } from "assets/keyboard-open.svg";
import { ReactComponent as Box } from "assets/box.svg";
import { ReactComponent as Driver } from "assets/driver.svg";

import "./ApprenticeshipTeamType.scss";

const TEAM_TYPES = [
  { type: "Web Platform", icon: Monitor },
  { type: "Mobile App", icon: Mobile },
  { type: "Growth", icon: Diagram },
  { type: "Marketing Website", icon: KeyboardOpen },
  { type: "Prototyping", icon: Box },
  { type: "Data", icon: Driver },
  { type: "Custom Team", icon: Box2 },
];

const ApprenticeshipTeamType = () => {
  const [teamTypeChecked, setTeamTypeChecked] = useState(null);

  return (
    <ApprenticeshipFormItemCard title="Team Type" className="teamType">
      <Row justify="start" align="middle" gutter={[32, 16]}>
        {TEAM_TYPES.map((item) => (
          <TeamTypeCard
            data={item}
            key={item.type}
            checked={teamTypeChecked === item.type}
            setTeamTypeChecked={setTeamTypeChecked}
          />
        ))}
      </Row>
    </ApprenticeshipFormItemCard>
  );
};

export default ApprenticeshipTeamType;
