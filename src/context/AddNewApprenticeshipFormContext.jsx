import { notification } from "antd";

import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "firebase";

const { createContext, useState, useEffect } = require("react");

export const defaultValue = {
  title: "",
  company_description: "",
  apprenticeship_description: "",
  intro_video: "",
  team_type: "",
  team_roles: [],
  team_admin: [],
  timeline: {
    start_date: "",
    end_date: "",
  },
  formFinished: false,
};

const AddNewApprenticeshipFormContext = createContext(defaultValue);

const AddNewApprenticeshipFormProvider = (props) => {
  // Component props //

  const { children, otherValues } = props;

  const { step } = otherValues;

  // FormContext state defined here //

  const [formContext, setFormContext] = useState(defaultValue);
  const [loading, setLoading] = useState(true);

  // Notification API //

  const [api, contextHolder] = notification.useNotification();

  // Async function to retieve recently created internship (document) from firestore //

  const getApprenticeships = async (firestoreDatabase) => {
    const apprenticeshipsCol = collection(firestoreDatabase, "apprenticeships");
    const docId = localStorage.getItem("docId");

    setLoading(true);

    const documentRef = await doc(apprenticeshipsCol, docId);

    getDocs(apprenticeshipsCol)
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
    getApprenticeships(db);
  }, [step]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AddNewApprenticeshipFormContext.Provider value={{ ...formContext, setFormContext, ...otherValues, loading }}>
      {children}
      {contextHolder}
    </AddNewApprenticeshipFormContext.Provider>
  );
};

export { AddNewApprenticeshipFormContext, AddNewApprenticeshipFormProvider };
