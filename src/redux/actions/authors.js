import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const START = "START";
export const SUCCESS = "SUCCESS";
export const FAILED = "FAILED";
export const GET_AUTHOR = "GET_AUTHOR";
export const GET_AUTHORS = "GET_AUTHORS";

// export const getAuthor = () => dispatch => {
//   dispatch({ type: START });

//   axiosWithAuth()
//     .get(`/books/${title}`)
//     .then(res => {
//       dispatch({ type: GET_BOOK, payload: res.data.book });
//       dispatch({ type: SUCCESS, payload: res.data.message });
//     })
//     .catch(err => {
//       dispatch({
//         type: FAILED,
//         payload: err.response.data.message
//           ? err.response.data.message
//           : "Internal server issues. Please try again."
//       });
//     });
// };

export const getAuthors = () => dispatch => {
  dispatch({ type: START });
  axiosWithAuth()
    .get(`/authors`)
    .then(res => {
      dispatch({
        type: GET_AUTHORS,
        payload: {
          authors: res.data.authors
        }
      });
      dispatch({ type: SUCCESS });
    })
    .catch(err => {
      dispatch({
        type: FAILED,
        payload: err.response.data.message
          ? err.response.data.message
          : "Internal server issues. Please try again."
      });
    });
};

export const deleteAuthor = id => dispatch => {
  dispatch({ type: START });
  axiosWithAuth()
    .delete(`/authors/${id}`)
    .then(res => {
      axiosWithAuth()
        .get(`/authors`)
        .then(res => {
          dispatch({ type: GET_AUTHORS, payload: res.data });
        });
      dispatch({ type: SUCCESS, payload: res.data.message });
    })
    .catch(err => {
      dispatch({
        type: FAILED,
        payload: err.response.data.message
          ? err.response.data.message
          : "Internal server issues. Please try again."
      });
    });
};
