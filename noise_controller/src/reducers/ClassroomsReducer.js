import {
   ADD_CLASSROOM_START,
   ADD_CLASSROOM_SUCCESS,
   ADD_CLASSROOM_FAILURE,
   DELETE_CLASSROOM_START,
   DELETE_CLASSROOM_SUCCESS,
   DELETE_CLASSROOM_FAILURE,
   TOGGLE_CLASSROOM_START,
   TOGGLE_CLASSROOM_SUCCESS,
   TOGGLE_CLASSROOM_FAILURE
} from '../actions';

const initialState = {
    teachers: [],
    addingClass: false,
    error: ''
}

export const ClassroomsReducer = ( state = initialState, action ) => {
switch (action.type) {
    case ADD_CLASSROOM_START:
    return {
        ...state,
        addingClass: true
    }
    case ADD_CLASSROOM_SUCCESS:
    return {
        ...state,
        addingClass: false,
        teachers: [...this.state.teachers, action.payload]
    }
    case ADD_CLASSROOM_FAILURE:
    return {
        ...state,
        addingClass: false,
        error: action.payload
    }

    case DELETE_CLASSROOM_START:
    return {
        ...state,
        error: ''
    }
    case DELETE_CLASSROOM_SUCCESS:
    return {
        ...state,
        error: ''
    }
    case DELETE_CLASSROOM_FAILURE:
    return {
        ...state,
        error: action.payload
    }

    case TOGGLE_CLASSROOM_START:
    return {
        ...state,
        error: ''
    }
    case TOGGLE_CLASSROOM_SUCCESS:
    return {
        ...state,
        error: ''
    }
    case TOGGLE_CLASSROOM_FAILURE:
    return {
        ...state,
        error: action.payload
    }

    default:
    return state;
}

}