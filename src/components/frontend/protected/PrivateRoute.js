import React from "react";
import { Route, Redirect } from "react-router-dom";
import cookies from "js-cookies";
import { axiosWithAuth } from "../../../utils/axiosWithAuth";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const accessSession = cookies.getItem("_accessSession");
    const refreshSession = cookies.getItem("_refreshSession");

    return (
        <Route
            {...rest}
            render={(props) => {
                if (!accessSession && !refreshSession) {
                    return <Redirect to="/login" />;
                }

                if (!accessSession && refreshSession) {
                    axiosWithAuth()
                        .post("/users/refresh-tokens")
                        .then((res) => {
                            window.location.reload();
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }

                if (accessSession) {
                    return <Component {...props} />;
                }
            }}
        />
    );
};

export default PrivateRoute;
