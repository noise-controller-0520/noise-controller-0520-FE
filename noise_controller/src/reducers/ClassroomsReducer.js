import {
   ADD_CLASSROOM_START,
   ADD_CLASSROOM_SUCCESS,
   ADD_CLASSROOM_FAILURE,
   DELETE_CLASSROOM_START,
   DELETE_CLASSROOM_SUCCESS,
   DELETE_CLASSROOM_FAILURE
} from '../actions';

const initialState = {
    classrooms: [
        {classroom: '5th Period Geometry', id: 0 },
        {classroom: '3rd Period Literature', id:1 }
    ],
    count:1,
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
    const idCounter = ++state.count;
    const newState = [...state.classrooms, {classroom: action.payload, id: idCounter} ]
    return {
        ...state,
        addingClass: false,
        classrooms: newState,
        count: idCounter
         
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

    default:
    return state;
}

}