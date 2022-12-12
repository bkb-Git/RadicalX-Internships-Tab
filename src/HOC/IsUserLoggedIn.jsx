import { useState } from "react";

import { auth } from "firebase";
import { onAuthStateChanged } from "firebase/auth";

import LoginPage from "pages/LoginPage";

const IsUserLoggedIn = (props) => {
  const { component: WrappedApp, ...otherProps } = props;
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) return setUserIsLoggedIn(true);
    return setUserIsLoggedIn(false);
  });

  return !userIsLoggedIn ? <LoginPage /> : <WrappedApp {...otherProps} />;
};

export default IsUserLoggedIn;
