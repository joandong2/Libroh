import { GET_USER, GET_USERS } from "../actions/users";

const initialState = {
    user: null,
};

export function users(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                user: action.payload.user[0],
            };
        case GET_USERS:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
}
