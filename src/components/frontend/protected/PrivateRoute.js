import React from "react";
import { Route, Redirect } from "react-router-dom";
import cookies from "js-cookies";
import { axiosWithAuth } from "../../../utils/axiosWithAuth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userSession = localStorage.getItem("_user");

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!userSession) {
          return <Redirect to="/login" />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

export default PrivateRoute;
