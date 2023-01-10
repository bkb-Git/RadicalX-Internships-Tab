import AddNewApprenticeship from "pages/MainPage/AddNewApprenticeship/AddNewApprenticeship";
import ApprenticeshipForm from "pages/MainPage/AddNewApprenticeship/ApprenticeshipForm";

const addNewApprenticeshipRoute = () => {
  const apprenticeshipsFormRoute = {
    index: true,
    element: <ApprenticeshipForm />,
  };

  return {
    path: "apprenticeships/add",
    element: <AddNewApprenticeship />,
    children: [apprenticeshipsFormRoute],
  };
};

export default addNewApprenticeshipRoute;
