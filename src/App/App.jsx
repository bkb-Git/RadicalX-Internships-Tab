import { useEffect } from "react";

import MainLayout from "layout/MainLayout";

import getInternships from "api/firebase";

const App = () => {
  useEffect(() => {
    getInternships()
      .then((docs) => console.log(docs))
      .catch((err) => console.log(err));
  }, []);

  return <MainLayout />;
};

export default App;
