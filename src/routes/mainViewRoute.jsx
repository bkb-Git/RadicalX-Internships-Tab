import MainLayout from "layout/MainLayout";
import Internships from "pages/MainPage/Internships";
import PageNotFound from "pages/PageNotFound";

const mainViewRoute = () => {
  const indexRoute = { index: true, element: <PageNotFound /> };
  const internshipsRoute = { path: "internships", element: <Internships /> };
  const otherRoutes = { path: "*", element: <PageNotFound /> };

  return {
    element: <MainLayout />,
    children: [indexRoute, internshipsRoute, otherRoutes],
  };
};

export default mainViewRoute;
