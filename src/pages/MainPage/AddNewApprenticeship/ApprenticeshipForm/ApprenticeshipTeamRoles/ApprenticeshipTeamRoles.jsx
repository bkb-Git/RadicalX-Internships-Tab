// import { useState } from "react";
import { Row } from "antd";

import ApprenticeshipFormItemCard from "components/ApprenticeshipFormItemCard";
// import TeamRoleCard from "components/TeamRoleCard";

import "./ApprenticeshipTeamRoles.scss";

const ApprenticeshipTeamRoles = () => {
  return (
    <ApprenticeshipFormItemCard title="Team Roles" className="teamRoles" addButton>
      <Row justify="start" align="middle" gutter={[32, 16]} />
    </ApprenticeshipFormItemCard>
  );
};

export default ApprenticeshipTeamRoles;
