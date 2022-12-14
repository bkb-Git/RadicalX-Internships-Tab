import { notification } from "antd";

import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "firebase";

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
  formFinished: false,
};

const AddNewInternshipFormContext = createContext(defaultValue);

const AddNewInternshipFormProvider = (props) => {
  // Component props //

  const { children, otherValues } = props;

  const { step } = otherValues;

  // FormContext state defined here //

  const [formContext, setFormContext] = useState(defaultValue);
  const [loading, setLoading] = useState(true);

  // Notification API //

  const [api, contextHolder] = notification.useNotification();

  // Async function to retieve recently created internship (document) from firestore //

  const getInternship = async (firestoreDatabase) => {
    const internshipCol = collection(firestoreDatabase, "internships");
    const docId = localStorage.getItem("docId");

    setLoading(true);

    const documentRef = await doc(internshipCol, docId);

    getDocs(internshipCol)
      .then((data) => {
        const currentDoc = data.docs.filter((item) => item.id === docId);
        return currentDoc ? currentDoc[0].data() : data.docs[0];
      })
      .then((list) => {
        setFormContext({ ...formContext, ...list, docRef: documentRef });
        setLoading(false);
      })
      .catch((error) =>
        api.error({
          message: error.message,
          placement: "bottomLeft",
        })
      );
  };

  useEffect(() => {
    getInternship(db);
  }, [step]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AddNewInternshipFormContext.Provider value={{ ...formContext, setFormContext, ...otherValues, loading }}>
      {children}
      {contextHolder}
    </AddNewInternshipFormContext.Provider>
  );
};

export { AddNewInternshipFormContext, AddNewInternshipFormProvider };
