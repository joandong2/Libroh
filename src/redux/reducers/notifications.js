import { START, SUCCESS, FAILED } from "../actions/users";

const initialState = {
  loading: false,
  message: null
};

export function notifications(state = initialState, action) {
  switch (action.type) {
    case START:
      return {
        ...state,
        loading: true,
        message: action.payload
      };
    case SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload
      };
    case FAILED:
      return {
        ...state,
        loading: false,
        message: action.payload
      };

    default:
      return state;
  }
}
