import React from "react";
import { Route, Redirect } from "react-router-dom";
import cookies from "js-cookies";
//import { axiosWithAuth } from "../../../utils/axiosWithAuth";

const AdminRoute = ({ component: Component, ...rest }) => {
  const adminSession = localStorage.getItem("_admin");

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!adminSession) {
          return <Redirect to="/admin" />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

export default AdminRoute;
