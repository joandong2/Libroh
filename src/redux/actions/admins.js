import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const START = "START";
export const SUCCESS = "SUCCESS";
export const FAILED = "FAILED";
// export const GET_USER = "GET_USER";
// export const GET_USERS = "GET_USERS";
// export const GET_BOOKS = "GET_BOOKS";

export const adminLogin = (values) => (dispatch) => {
    dispatch({ type: START });

    axiosWithAuth()
        .post("/admins/login", {
            email: values.email,
            password: values.password,
        })
        .then((res) => {
            dispatch({ type: SUCCESS, payload: res.data.message });
            setTimeout(() => {
                window.location.replace("/admin/dashboard");
            }, 1000);
        })
        .catch((err) => {
            //console.log("err", err.response.status);
            dispatch({
                type: FAILED,
                payload: err.response.data.message
                    ? err.response.data.message
                    : "Internal server issues. Please try again.",
            });
        });
};