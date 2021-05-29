import React from "react";
import { Route, Redirect } from "react-router-dom";
import cookies from "js-cookies";
//import { axiosWithAuth } from "../../../utils/axiosWithAuth";

const AdminRoute = ({ component: Component, ...rest }) => {
  const accessSession = cookies.getItem("_adminAccessSession");
  const admin = cookies.getItem("_admin");

  return (
    <Route
      {...rest}
      render={props => {
        if (!accessSession) {
          return <Redirect to="/admin" />;
        }

        if (accessSession && admin) {
          return <Component {...props} />;
        }
      }}
    />
  );
};

export default AdminRoute;
