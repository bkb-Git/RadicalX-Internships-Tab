import { useState } from "react";
// import { Row } from "antd";

import ApprenticeshipFormItemCard from "components/ApprenticeshipFormItemCard";
// import TeamRoleCard from "components/TeamRoleCard";
import TeamRoleFormModal from "./TeamRoleFormModal";

import "./ApprenticeshipTeamRoles.scss";

const ApprenticeshipTeamRoles = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  return (
    <ApprenticeshipFormItemCard
      title="Team Roles"
      className="teamRoles"
      modal={{ title: "Add Role", open, setOpen, view: TeamRoleFormModal }}
      addButton={handleOpen}
    />
  );
};

export default ApprenticeshipTeamRoles;
