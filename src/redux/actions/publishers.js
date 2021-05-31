import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const START = "START";
export const SUCCESS = "SUCCESS";
export const FAILED = "FAILED";
export const GET_PUBLISHER = "GET_PUBLISHER";
export const GET_PUBLISHERS = "GET_PUBLISHERS";

// export const getPublisher => dispatch => {
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

export const getPublishers = () => dispatch => {
  dispatch({ type: START });
  axiosWithAuth()
    .get(`/publishers`)
    .then(res => {
      dispatch({
        type: GET_PUBLISHERS,
        payload: {
          publishers: res.data.publishers
        }
      });
      //dispatch({ type: SUCCESS, payload: res.data.message });
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

export const postPublisher = values => dispatch => {
  dispatch({ type: START });

  axiosWithAuth()
    .post(`/publishers`, {
      name: values.name,
      slug: values.name.toLowerCase().split(" ").join("-")
    })
    .then(res => {
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

export const deletePublisher = id => dispatch => {
  dispatch({ type: START });
  axiosWithAuth()
    .delete(`/publishers/${id}`)
    .then(res => {
      axiosWithAuth()
        .get(`/publishers`)
        .then(res => {
          dispatch({ type: GET_PUBLISHERS, payload: res.data });
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
