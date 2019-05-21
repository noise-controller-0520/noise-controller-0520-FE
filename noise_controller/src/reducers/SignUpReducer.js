import {
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE
} from '../actions';

const initialState = {
    teachers: [],
    signingUp: false,
    error: '',
}

export const SignUpReducer = ( state = initialState, action ) => {
switch (action.type) {
    case SIGN_UP_START:
    return {
        ...state,
        signingUp: true
    }

    case SIGN_UP_SUCCESS:
    return {
        ...state,
        signingUp: false,
        teachers: [...state.teachers, action.payload]
    }
 
    case SIGN_UP_FAILURE:
    return {
        ...state,
        signingUp: false,
        error: action.payload
    }

    default:
    return state;
}

}