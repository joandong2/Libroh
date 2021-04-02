import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const START = "START";
export const SUCCESS = "SUCCESS";
export const FAILED = "FAILED";
export const GET_BOOK = "GET_BOOK";
export const GET_BOOKS = "GET_BOOKS";
export const GET_CATEGORIES = "GET_CATEGORIES";

export const getBook = title => dispatch => {
  dispatch({ type: START });

  axiosWithAuth()
    .get(`/books/${title}`)
    .then(res => {
      dispatch({ type: GET_BOOK, payload: res.data.book });
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

export const getBooks = (category, pageNum) => dispatch => {
  dispatch({ type: START });
  axiosWithAuth()
    .get(
      pageNum === undefined
        ? `/books`
        : category === undefined
        ? `/books?page=${parseInt(pageNum)}`
        : `/books/category/${category}?page=${parseInt(pageNum)}`
    )
    .then(res => {
      dispatch({ type: GET_BOOKS, payload: res.data });
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

export const getCategories = () => dispatch => {
  dispatch({ type: START });
  axiosWithAuth()
    .get("/categories")
    .then(res => {
      dispatch({ type: GET_CATEGORIES, payload: res.data });
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

export const updateBookRatingByUser = (
  book_title,
  book_id,
  user_id,
  rating
) => dispatch => {
  dispatch({ type: START });
  axiosWithAuth()
    .patch(`/books/${book_title}/rating`, {
      book_id: book_id,
      user_id: user_id,
      rating: rating
    })
    .then(res => {
      //dispatch({ type: SUCCESS, payload: res.data.message });
      window.location.reload();
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
