import LoginPage from "pages/LoginPage";

const IsUserLoggedIn = (props) => {
  const { component: WrappedApp, ...otherProps } = props;

  const userIsLoggedIn = false;

  return !userIsLoggedIn ? <LoginPage /> : <WrappedApp {...otherProps} />;
};

export default IsUserLoggedIn;
