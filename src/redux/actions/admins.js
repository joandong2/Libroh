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
      if (
        localStorage.getItem("_user") !== null &&
        localStorage.getItem("token") !== null
      ) {
        localStorage.removeItem("_user");
        localStorage.removeItem("token");
      }
      localStorage.setItem("adminToken", res.data.adminToken);
      localStorage.setItem("_admin", res.data._admin);
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

// export const adminLogout = () => (dispatch) => {
//   dispatch({ type: START });

//   axiosWithAuth()
//     .post("/admins/logout")
//     .then((res) => {
//       dispatch({ type: SUCCESS });
//       window.location.replace("/admin");
//     })
//     .catch((err) => {
//       //console.log("err", err.response.status);
//       dispatch({
//         type: FAILED,
//         payload: err.response.data.message
//           ? err.response.data.message
//           : "Internal server issues. Please try again.",
//       });
//     });
// };
