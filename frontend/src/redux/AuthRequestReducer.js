import { ADD_AUTH_REQUEST, GET_AUTH_REQUESTS, SET_AUTH_LOADING } from './types';

const initialState = {
    authRequests: [],
    authRequest: null,
    loading: false,
};

const authRequestReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_AUTH_REQUESTS:
            return {
                ...state,
                authRequests: action.payload,
                loading: false,
            };
        case ADD_AUTH_REQUEST:
            return {
                ...state,
                authRequests: [...state.authRequests, action.payload],
            };
        case SET_AUTH_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;
    }
};

export default authRequestReducer;
