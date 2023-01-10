import { useContext, useState } from "react";
import { Row } from "antd";

import ApprenticeshipFormItemCard from "components/ApprenticeshipFormItemCard";

import { AddNewApprenticeshipFormContext } from "context/AddNewApprenticeshipFormContext";

import TeamRoleCard from "components/TeamRoleCard";
import TeamRoleFormModal from "./TeamRoleFormModal";

import "./ApprenticeshipTeamRoles.scss";

const ApprenticeshipTeamRoles = () => {
  const formContext = useContext(AddNewApprenticeshipFormContext);
  const { teamRoles, setFormContext, ...otherValues } = formContext;

  const [open, setOpen] = useState(false);
  const [roles, setRoles] = useState(teamRoles);

  const rolesExist = roles.length > 0;

  // Handle functions defined here

  const handleOpen = () => setOpen(true);

  const handleFinish = (values) => {
    const rolesIsEmpty = roles.length === 0;

    if (rolesIsEmpty) {
      setRoles([{ id: 0, ...values }]);
      return setFormContext({ ...otherValues, teamRoles: [{ id: 0, ...values }] });
    }

    const lastRoleId = roles[roles.length - 1].id;

    setRoles([...roles, { id: lastRoleId + 1, ...values }]);
    setFormContext({ ...otherValues, teamRoles: [...roles, { id: lastRoleId + 1, ...values }] });

    return setOpen(false);
  };

  const modalConfig = { title: "Add Role", open, setOpen, view: TeamRoleFormModal, handleFinish };

  return (
    <ApprenticeshipFormItemCard title="Team Roles" className="teamRoles" modal={modalConfig} addButton={handleOpen}>
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
