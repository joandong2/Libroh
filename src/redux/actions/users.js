import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const START = "START";
export const SUCCESS = "SUCCESS";
export const FAILED = "FAILED";
export const GET_USER = "GET_USER";
export const GET_USERS = "GET_USERS";
export const GET_BOOKS = "GET_BOOKS";

export const userLogin = (values) => (dispatch) => {
    dispatch({ type: START });

    axiosWithAuth()
        .post("/users/login", {
            email: values.email,
            password: values.password,
        })
        .then((res) => {
            dispatch({ type: SUCCESS, payload: res.data.message });
            setTimeout(() => {
                window.location.replace("/");
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

export const userSignup = (values) => (dispatch) => {
    dispatch({ type: START });

    axiosWithAuth()
        .post("/users/register", values)
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
        .put("/users/forgot-password", email)
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
        .put("/users/reset-password", {
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

export const userLogout = () => (dispatch) => {
    dispatch({ type: START });

    axiosWithAuth()
        .post("/users/logout")
        .then((res) => {
            dispatch({ type: SUCCESS, payload: res.data.message });
            window.location.replace("/");
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

export const getUser = (id) => (dispatch) => {
    dispatch({ type: START });

    axiosWithAuth()
        .get(`/users/${id}`)
        .then((res) => {
            dispatch({ type: SUCCESS, payload: res.data.message });
            dispatch({ type: GET_USER, payload: res.data });
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

export const getUserBook = (id) => (dispatch) => {
    dispatch({ type: START });

    axiosWithAuth()
        .get(`/users/${id}/books`)
        .then((res) => {
            console.log(res);
            dispatch({ type: SUCCESS, payload: res.data.message });
            dispatch({ type: GET_USER, payload: res.data });
            dispatch({ type: GET_BOOKS, payload: res.data });
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

export const updateUser = (id, values) => (dispatch) => {
    dispatch({ type: START });

    axiosWithAuth()
        .put(`/users/${id}`, values)
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

export const updateUserBook = (id, book_id) => (dispatch) => {
    dispatch({ type: START });
    axiosWithAuth()
        .patch(`/users/${id}/books`, { book_id: book_id })
        .then((res) => {
            dispatch({ type: GET_USER, payload: res.data });
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

export const donateBook = (values) => (dispatch) => {
    //console.log("val", values);
    dispatch({ type: START });
    axiosWithAuth()
        .post(`/users/donate`, values)
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
