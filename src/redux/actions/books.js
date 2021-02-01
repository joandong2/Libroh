import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const START = "START";
export const SUCCESS = "SUCCESS";
export const FAILED = "FAILED";
export const GET_BOOK = "GET_BOOK";
export const GET_BOOKS = "GET_BOOKS";
export const GET_CATEGORIES = "GET_CATEGORIES";

export const getBook = (title) => (dispatch) => {
    dispatch({ type: START });

    axiosWithAuth()
        .get(`/books/${title}`)
        .then((res) => {
            console.log(res);
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

export const getBooks = (category, pageNum) => (dispatch) => {
    dispatch({ type: START });
    axiosWithAuth()
        .get(
            category === undefined
                ? `/books?page=${parseInt(pageNum)}`
                : `/books/category/${category}?page=${parseInt(pageNum)}`
        )
        .then((res) => {
            dispatch({ type: SUCCESS, payload: res.data.message });
            dispatch({ type: GET_BOOKS, payload: res.data });
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
        .get("/categories")
        .then((res) => {
            dispatch({ type: SUCCESS, payload: res.data.message });
            dispatch({ type: GET_CATEGORIES, payload: res.data });
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
