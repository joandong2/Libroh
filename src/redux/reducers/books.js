import { GET_BOOK, GET_BOOKS, GET_CATEGORIES } from "../actions/books";

const initialState = {
    book: null,
    books: null,
    categories: null,
};

export function books(state = initialState, action) {
    switch (action.type) {
        case GET_BOOK:
            return {
                ...state,
                book: action.payload,
            };
        case GET_BOOKS:
            return {
                ...state,
                books: action.payload,
            };
        case GET_CATEGORIES:
            return {
                ...state,
                books: action.payload,
            };
        default:
            return state;
    }
}
