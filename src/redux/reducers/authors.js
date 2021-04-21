import { GET_AUTHOR, GET_AUTHORS } from "../actions/authors";

const initialState = {
  author: null,
  authors: null
};

export function authors(state = initialState, action) {
  switch (action.type) {
    case GET_AUTHOR:
      return {
        ...state,
        author: action.payload
      };
    case GET_AUTHORS:
      return {
        ...state,
        authors: action.payload.authors
        //message: action.message
      };
    default:
      return state;
  }
}
