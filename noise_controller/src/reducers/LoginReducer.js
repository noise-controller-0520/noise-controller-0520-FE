import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions';

const initialState = {
    isLoggingIn: false,
    error: ''
}

export const LoginReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case LOGIN_START:
        return {
            ...state,
            isLoggingIn: true,
            error: ''
        }

        case LOGIN_SUCCESS:
        return {
            ...state,
            isLoggingIn: false,
            error: ''
        }

        case LOGIN_FAILURE:
        return {
            ...state,
            isLoggingIn: false
        }

        default:
        return state;
    }
}