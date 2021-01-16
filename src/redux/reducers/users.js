import { GET_USER, GET_USERS } from "../actions/users";

const initialState = {
    user: null,
    isLoading: false,
    isLoaded: false,
    message: null,
};

export function users(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                isLoading: true,
                isLoaded: false,
            };
        case GET_USERS:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                user: action.payload.user,
                message: action.payload.message,
            };
        default:
            return state;
    }
}
