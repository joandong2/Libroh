import { GET_BOOK, GET_BOOKS, GET_CATEGORIES } from "../actions/books";

const initialState = {
    book: null,
    books: null,
    categories: null,
    totalPages: null,
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
                books: action.payload.books,
                totalPages: parseInt(
                    (
                        action.payload.total_books / action.payload.page_limit
                    ).toFixed()
                ),
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
