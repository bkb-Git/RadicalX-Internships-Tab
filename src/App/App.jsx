import { useContext } from "react";
import { GlobalContext } from "context/GlobalContext";

import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom";

import LoginPage from "pages/LoginPage";

import addNewInternshipRoute from "routes/addNewInternshipRoute";
import mainViewRoute from "routes/mainViewRoute";

import MainPage from "pages/MainPage";
import addNewApprenticeshipRoute from "routes/addNewApprenticeshipRoute";

const App = () => {
  const globalContext = useContext(GlobalContext);

  const MainViewRoute = mainViewRoute();
  const AddNewInternshipRoute = addNewInternshipRoute();
  const AddNewApprenticeshipRoute = addNewApprenticeshipRoute();

  const LoginRoute = {
    path: "/login",
    element: <LoginPage />,
    loader: () => {
      if (globalContext.userDetails) return redirect("/");
      return false;
    },
  };

  const AppRoute = {
    path: "/",
    element: <MainPage />,
    children: [MainViewRoute, AddNewInternshipRoute, AddNewApprenticeshipRoute],
    loader: () => {
      if (!globalContext.userDetails) return redirect("/login");
      return false;
    },
  };

  const router = createBrowserRouter([AppRoute, LoginRoute]);

  return <RouterProvider router={router} />;
};

export default App;
