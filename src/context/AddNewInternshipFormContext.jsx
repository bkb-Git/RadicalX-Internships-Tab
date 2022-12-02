import { collection, getDocs } from "firebase/firestore";

import db from "firebase";

const { createContext, useState, useEffect } = require("react");

export const defaultValue = {
  internshipDescription: {
    category: [],
    description: "",
    location: "",
    benefits: "",
    "intro-video": "",
    "mentor-details": "",
    "recommended-roles": [],
    links: "",
  },
  internshipGuide: {
    overview: {},
    schedule: {},
    resources: {},
  },
  internshipSettings: {
    basicSettings: {},
    heroImage: {},
  },
  internshipSurvey: {
    survey1: "",
    survey2: "",
  },
};

const AddNewInternshipFormContext = createContext(defaultValue);

const AddNewInternshipFormProvider = (props) => {
  const { children, otherValues } = props;

  const { step } = otherValues;

  const [formContext, setFormContext] = useState(defaultValue);
  const [loading, setLoading] = useState(true);

  const getInternship = async (firestoreDatabase) => {
    const internshipCol = collection(firestoreDatabase, "internships");
    const docRef = "qgEZ7TOvmrI38MHSyGWQ";

    setLoading(true);

    await getDocs(internshipCol)
      .then((data) => data.docs.map((item) => item.data()))
      .then((list) => {
        setFormContext({ ...formContext, ...list[0], documentRef: docRef });
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getInternship(db);
  }, [step]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AddNewInternshipFormContext.Provider value={{ ...formContext, setFormContext, ...otherValues, loading }}>
      {children}
    </AddNewInternshipFormContext.Provider>
  );
};

export { AddNewInternshipFormContext, AddNewInternshipFormProvider };
