import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const START = "START";
export const SUCCESS = "SUCCESS";
export const FAILED = "FAILED";
export const GET_USER = "GET_USER";
export const GET_USERS = "GET_USERS";

export const userLogin = (values) => (dispatch) => {
    dispatch({ type: START });

    axiosWithAuth()
        .post("http://localhost:8000/api/users/login", {
            email: values.email,
            password: values.password,
        })
        .then((res) => {
            //console.log(res);
            dispatch({ type: SUCCESS, payload: res.data.message });
            // setTimeout(() => {
            //     window.location.replace("/");
            // }, 2000);
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

export const userSignup = (values) => (dispatch) => {
    dispatch({ type: START });

    axiosWithAuth()
        .post("http://localhost:8000/api/users/register", values)
        .then((res) => {
            dispatch({ type: SUCCESS, payload: res.data.message });
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

export const forgetPassword = (email) => (dispatch) => {
    dispatch({ type: START });

    axiosWithAuth()
        .put("http://localhost:8000/api/users/forgot-password", email)
        .then((res) => {
            dispatch({ type: SUCCESS, payload: res.data.message });
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

export const resetPassword = (token, password) => (dispatch) => {
    dispatch({ type: START });

    axiosWithAuth()
        .put("http://localhost:8000/api/users/reset-password", {
            resetToken: token,
            password: password,
        })
        .then((res) => {
            dispatch({ type: SUCCESS, payload: res.data.message });
        })
        .catch((err) => {
            dispatch({
                type: FAILED,
                payload: err.response.data.message
                    ? err.response.data.message
                    : "Internal server issues. Please try again.",
            });
        });
};
