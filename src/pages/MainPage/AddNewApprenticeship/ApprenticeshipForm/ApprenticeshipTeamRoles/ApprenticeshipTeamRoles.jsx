import { useState } from "react";
import { Row } from "antd";

import ApprenticeshipFormItemCard from "components/ApprenticeshipFormItemCard";

import TeamRoleCard from "components/TeamRoleCard";
import TeamRoleFormModal from "./TeamRoleFormModal";

import "./ApprenticeshipTeamRoles.scss";

const ApprenticeshipTeamRoles = () => {
  const [open, setOpen] = useState(false);
  const [roles, setRoles] = useState(null);

  const handleOpen = () => setOpen(true);

  const handleFinish = (values) => {
    const rolesIsEmpty = !roles || roles === [];

    if (rolesIsEmpty) return setRoles([{ id: 0, ...values }]);

    const lastRoleId = roles[roles.length - 1].id;

    setRoles([...roles, { id: lastRoleId + 1, ...values }]);

    return setOpen(false);
  };

  const rolesExist = roles && roles !== [];

  return (
    <ApprenticeshipFormItemCard
      title="Team Roles"
      className="teamRoles"
      modal={{ title: "Add Role", open, setOpen, view: TeamRoleFormModal, handleFinish }}
      addButton={handleOpen}
    >
      {rolesExist && (
        <Row justify="start" align="middle" gutter={[16, 16]}>
          {roles.map((role) => (
            <TeamRoleCard key={role.id} data={role} />
          ))}
        </Row>
      )}
    </ApprenticeshipFormItemCard>
  );
};

export default ApprenticeshipTeamRoles;
