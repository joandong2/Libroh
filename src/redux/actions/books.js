import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const START = "START";
export const SUCCESS = "SUCCESS";
export const FAILED = "FAILED";
export const GET_BOOK = "GET_BOOK";
export const GET_BOOKS = "GET_BOOKS";
export const GET_CATEGORIES = "GET_CATEGORIES";

export const getBook = (id) => (dispatch) => {
    dispatch({ type: START });

    axiosWithAuth()
        .get(`/books/${id}`)
        .then((res) => {
            dispatch({ type: SUCCESS, payload: res.data.message });
            dispatch({ type: GET_BOOK, payload: res.data.book });
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

export const getBooks = () => (dispatch) => {
    dispatch({ type: START });

    axiosWithAuth()
        .get(`/books/`)
        .then((res) => {
            dispatch({ type: SUCCESS, payload: res.data.message });
            dispatch({ type: GET_BOOKS, payload: res.data.books });
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

export const getCategories = () => (dispatch) => {
    dispatch({ type: START });

    axiosWithAuth()
        .get(`/books/`)
        .then((res) => {
            dispatch({ type: SUCCESS, payload: res.data.message });
            dispatch({ type: GET_BOOKS, payload: res.data.books });
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
