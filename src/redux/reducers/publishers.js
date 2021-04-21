import { GET_PUBLISHER, GET_PUBLISHERS } from "../actions/publishers";

const initialState = {
  publisher: null,
  publishers: null
};

export function publishers(state = initialState, action) {
  switch (action.type) {
    case GET_PUBLISHER:
      return {
        ...state,
        publisher: action.payload
      };
    case GET_PUBLISHERS:
      return {
        ...state,
        publishers: action.payload.publishers
        //message: action.message
      };
    default:
      return state;
  }
}
