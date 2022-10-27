import { useEffect } from "react";

import MainLayout from "layout/MainLayout";
import Internships from "pages/Internships";

// import getInternships from "api/firebase";

const App = () => {
  useEffect(() => {
    // getInternships()
    //   .then((docs) => console.log(docs))
    //   .catch((err) => console.log(err));
  }, []);

  return (
    <MainLayout>
      <Internships />
    </MainLayout>
  );
};

export default App;
