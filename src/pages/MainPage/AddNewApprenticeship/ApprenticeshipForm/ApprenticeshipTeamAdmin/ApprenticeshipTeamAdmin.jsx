import { Row } from "antd";

import ApprenticeshipFormItemCard from "components/ApprenticeshipFormItemCard";
import TeamAdminCard from "components/TeamAdminCard";
import { useState } from "react";

import "./ApprenticeshipTeamAdmin.scss";

const ApprenticeshipTeamAdmin = () => {
  // eslint-disable-next-line no-unused-vars
  const [admins, setAdmins] = useState([{ name: "John McKinsey" }]);
  return (
    <ApprenticeshipFormItemCard title="Team Admin" className="teamAdmins" addButton>
      <Row justify="start" align="middle" gutter={[32, 16]}>
        {admins.map((item) => (
          <TeamAdminCard name={item.name} key={item.name} />
        ))}
      </Row>
    </ApprenticeshipFormItemCard>
  );
};

export default ApprenticeshipTeamAdmin;
