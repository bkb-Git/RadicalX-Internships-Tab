import { createContext, useEffect, useState } from "react";

import { auth } from "firebase";
import { onAuthStateChanged } from "firebase/auth";

import LoadingScreen from "components/LoadingScreen";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserDetails(user);
        setLoading(false);
      } else {
        setUserDetails(null);
        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <GlobalContext.Provider value={{ userDetails, loading }}>
      {loading ? <LoadingScreen /> : children}
    </GlobalContext.Provider>
  );
};

export { GlobalContextProvider, GlobalContext };
