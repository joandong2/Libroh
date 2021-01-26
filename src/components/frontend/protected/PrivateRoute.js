import React from "react";
import { Route, Redirect } from "react-router-dom";
import cookies from "js-cookies";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const userAccess = cookies.getItem("userAccess");
    const tokenSession = cookies.getItem("tokenSession");

    return (
        <Route
            {...rest}
            render={(props) => {
                if (!userAccess && !tokenSession) {
                    return <Redirect to="/login" />;
                }

                if (userAccess) {
                    return <Component {...props} />;
                }

                if (!userAccess && tokenSession) {
                }
            }}
        />
    );
};

export default PrivateRoute;
