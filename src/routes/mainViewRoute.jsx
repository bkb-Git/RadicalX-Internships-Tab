import MainLayout from "layout/MainLayout";
import Apprenticeships from "pages/MainPage/Apprenticeships";
import Internships from "pages/MainPage/Internships";
import PageNotFound from "pages/PageNotFound";

const mainViewRoute = () => {
  const indexRoute = { index: true, element: <PageNotFound /> };
  const internshipsRoute = { path: "internships", element: <Internships /> };
  const apprenticeshipsRoute = { path: "apprenticeships", element: <Apprenticeships /> };
  const otherRoutes = { path: "*", element: <PageNotFound /> };

  return {
    element: <MainLayout />,
    children: [indexRoute, internshipsRoute, apprenticeshipsRoute, otherRoutes],
  };
};

export default mainViewRoute;
