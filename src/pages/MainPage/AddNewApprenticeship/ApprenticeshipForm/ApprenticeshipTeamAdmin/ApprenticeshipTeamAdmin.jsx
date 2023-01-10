import { useState, useContext } from "react";

import { Row } from "antd";

import { AddNewApprenticeshipFormContext } from "context/AddNewApprenticeshipFormContext";

import TeamAdminCard from "components/TeamAdminCard";
import ApprenticeshipFormItemCard from "components/ApprenticeshipFormItemCard";

import TeamAdminFormModal from "./TeamAdminFormModal";

import "./ApprenticeshipTeamAdmin.scss";

const ApprenticeshipTeamAdmin = () => {
  const formContext = useContext(AddNewApprenticeshipFormContext);
  const { setFormContext, teamAdmin, ...otherValues } = formContext;

  const [admins, setAdmins] = useState(teamAdmin);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleFinish = (values) => {
    const adminsIsEmpty = admins.length === 0;

    if (adminsIsEmpty) {
      setAdmins([{ id: 0, ...values }]);
      return setFormContext([{ id: 0, ...values }]);
    }

    const lastAdminId = admins[admins.length - 1].id;

    setAdmins([...admins, { id: lastAdminId + 1, ...values }]);
    setFormContext({ ...otherValues, teamAdmin: [...admins, { id: lastAdminId + 1, ...values }] });

    return setOpen(false);
  };

  const adminsExist = admins.length > 0;

  const renderAdmins = () => admins.map((item) => <TeamAdminCard name={item.name} key={item.name} />);

  const modalConfig = { title: "Add Admin", open, setOpen, view: TeamAdminFormModal, handleFinish };

  return (
    <ApprenticeshipFormItemCard title="Team Admin" className="teamAdmin" modal={modalConfig} addButton={handleOpen}>
      <Row justify="start" align="middle" gutter={[32, 16]}>
        {adminsExist && renderAdmins()}
      </Row>
    </ApprenticeshipFormItemCard>
  );
};

export default ApprenticeshipTeamAdmin;
